const mongoose = require('mongoose');
const multer = require('multer');
const AWS = require('aws-sdk');
const Form = require('../models/Form');
const s3 = require('../utils/s3Config'); // Import S3 configuration
const stripe = require('../utils/stripeConfig');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Submit form data
exports.submitForm = async (req, res) => {
  try {
    const { formName, pages } = req.body;
    const userId = req.userId;

    if (!formName || !Array.isArray(pages)) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    const newForm = new Form({
      formName,
      userId,
      pages: pages.map(page => ({
        pageId: page.pageId,
        pageName: page.pageName,
        fields: page.fields,
        componentsMetaData: page.componentsMetaData
      }))
    });

    const savedForm = await newForm.save();

    res.status(201).json({ message: 'Form submitted successfully', formId: savedForm._id, savedForm: savedForm });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};


// Updated getFormById to include file URLs
exports.getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;  // Get the userId from the authenticated request

    const form = await Form.findOne({ _id: id, userId });  // Fetch form by ID and userId
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Updated getAllForms to include file URLs
exports.getAllForms = async (req, res) => {
  try {
    const userId = req.userId;  // Extract userId from the authenticated request
    const forms = await Form.find({ userId });  // Fetch forms associated with this user
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }

};

// Function to get a file directly from S3
exports.getFile = (req, res) => {
  const { fileKey } = req.params;

  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
    };

    s3.getObject(params)
      .createReadStream()
      .on('error', (error) => {
        console.error(error);
        res.status(404).json({ error: 'File not found' });
      })
      .pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Updated editForm to handle form updates and file uploads
exports.editForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { formName, pages } = req.body;
    const userId = req.userId;  // Extract userId from the authenticated request
    const files = req.files; // Contains the newly uploaded files

    // Find the form by ID and userId
    let form = await Form.findOne({ _id: id});

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    // Update formName if provided
    if (formName) {
      form.formName = formName;
    }

    // Update pages if provided
    if (pages) {
      form.pages = pages;  // Assuming pages is already in the correct format
    }

    // Process newly uploaded files (using multer)
    // if (files && files.length > 0) {
    //   if (!form.files) {
    //     form.files = new Map(); // Initialize the files Map if it doesn't exist
    //   }

    //   // Use a `for...of` loop to properly handle async uploads
    //   for (const file of files) {
    //     const sanitizedFileName = file.originalname.replace(/\./g, '_'); // Replace dots with underscores

    //     const uploadParams = {
    //       Bucket: process.env.S3_BUCKET_NAME,
    //       Key: `uploads/${Date.now()}_${file.originalname}`,
    //       Body: file.buffer,
    //       ContentType: file.mimetype,
    //     };

    //     // Upload file to S3
    //     const uploadResult = await s3.upload(uploadParams).promise();

    //     // Add or update the file entry in the Map
    //     form.files.set(sanitizedFileName, {
    //       url: uploadResult.Location,
    //       key: uploadResult.Key,
    //       mimetype: file.mimetype,
    //     });
    //   }
    // }

    // Save the updated form
    const updatedForm = await form.save();

    return res.status(200).json(updatedForm);
  } catch (error) {
    console.error("Error in updating form:", error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const form = await Form.findOne({ _id: id });
    if (!form) {
      console.log(`Form not found. ID: ${id}, UserID: ${userId}`);
      return res.status(404).json({ error: 'Form not found', details: 'The requested form does not exist or you do not have permission to delete it.' });
    }

    // const deletePromises = [];
    // if (form.files && form.files instanceof Map) {
    //   for (const [fieldName, file] of form.files) {
    //     if (!file.key) {
    //       console.error(`File key is missing for field: ${fieldName}`, file);
    //       continue;
    //     }
    //
    //     const params = {
    //       Bucket: process.env.S3_BUCKET_NAME,
    //       Key: file.key,
    //     };
    //
    //     deletePromises.push(s3.deleteObject(params).promise());
    //   }
    // }
    //
    // await Promise.all(deletePromises);

    const deletedForm = await Form.findOneAndDelete({ _id: id});
    if (!deletedForm) {
      console.log(`Form not found during deletion. ID: ${id}, UserID: ${userId}`);
      return res.status(404).json({ error: 'Form not found', details: 'The form was not found during the deletion process.' });
    }

    res.status(200).json({ message: 'Form deleted successfully', formId: id });
  } catch (error) {
    console.error('Error in deleteForm:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency, paymentMethodTypes } = req.body;

    // Create a Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method_types: paymentMethodTypes || ['card'],
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    res.status(500).json({ error: 'Unable to create payment intent' });
  }
};

exports.handleStripeWebhook = (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful:', paymentIntent.id);
      break;
    case 'payment_intent.payment_failed':
      const failedPaymentIntent = event.data.object;
      console.error('PaymentIntent failed:', failedPaymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
};


// GET /api/forms/:formId/stats/total-submissions
exports.getTotalSubmissions = async (req, res) => {
  try {
    const { formId } = req.params;
    const userId = req.userId; // Assuming you have the userId from your authentication middleware

    // Count submissions made by the logged-in user
    const totalSubmissions = await Form.countDocuments({ userId });

    res.json({ totalSubmissions });
  } catch (error) {
    console.error('Error fetching total submissions:', error);
    res.status(500).json({ error: 'Failed to fetch total submissions' });
  }
};



// GET /api/forms/:formId/stats/average-time
exports.getAverageTimeToComplete = async (req, res) => {
  try {
    const userId = req.userId; // Get the userId from authentication middleware

    // Find all submissions made by the logged-in user
    const formSubmissions = await Form.find({ userId });

    // Calculate total time for all submissions
    const totalTimes = formSubmissions.reduce((acc, submission) => {
      const timeTaken = (submission.completedAt - submission.startedAt) / 1000; // Time in seconds
      return acc + timeTaken;
    }, 0);

    // Calculate average time
    const averageTime = formSubmissions.length > 0 ? totalTimes / formSubmissions.length : 0;

    res.json({ averageTime: `${averageTime.toFixed(2)} seconds` });
  } catch (error) {
    console.error('Error fetching average time to complete:', error);
    res.status(500).json({ error: 'Failed to fetch average time to complete' });
  }
};
