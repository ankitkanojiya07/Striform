import React from "react";
import ContentBox from "../components/ContentBox.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

const PrivacyPolicy = () => {
  const textInPrivacyPolicy = (
    <div className="space-y-8 p-6">
      {/* Introduction */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          Welcome to striform (“us”, “we”, or “our”) operates striform
          (website/mobile application) (hereinafter referred to as “Service”).
          Our Privacy Policy governs your visit to striform (website/mobile
          application), and explains how we collect, safeguard and disclose
          information that results from your use of our Service. We use your
          data to provide and improve Service. By using Service, you agree to
          the collection and use of information in accordance with this policy.
          Unless otherwise defined in this Privacy Policy, the terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions. Our Terms and Conditions (“Terms”) govern all use of our
          Service and together with the Privacy Policy constitute your agreement
          with us (“Agreement”).
        </p>
      </div>

      {/* Definitions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">2. Definitions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            “Cookies” means small files stored on your device (computer or
            mobile device);
          </li>
          <li>
            “Data Controller” means a natural or legal person who (either alone
            or jointly or in common with other persons) determines the purposes
            for which and the manner in which any personal data are, or are to
            be, processed. For the purpose of this Privacy Policy, we are a Data
            Controller of your data;
          </li>
          <li>
            “Data Processors” or “Service Provider” means any natural or legal
            person who processes the data on behalf of the Data Controller. We
            may use the services of various Service Providers in order to
            process your data more effectively;
          </li>
          <li>
            “Data Subject” is any living individual who is the subject of
            Personal Data;
          </li>
          <li>
            “Location Data” shall have the meaning ascribed to it in Clause 4.3;
          </li>
          <li>
            “Personal Data” means data about a living individual who can be
            identified from those data (or from those and other information
            either in our possession or likely to come into our possession);
          </li>
          <li>“Service” means the striform (website/mobile application);</li>
          <li>
            “Usage Data” means data collected automatically either generated by
            the use of Service or from Service infrastructure itself (for
            example, the duration of a page visit); and
          </li>
          <li>
            “User(s)” means the person(s) using our Service and who corresponds
            to the Data Subject, which is the subject of Personal Data.
          </li>
        </ul>
      </div>

      {/* Information Collection and Use */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Information Collection and Use
        </h2>
        <p className="text-base leading-relaxed">
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
      </div>

      {/* Types of Data Collected */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">4. Types of Data Collected</h2>

        {/* Personal Data */}
        <h3 className="text-xl font-semibold">a. Personal Data</h3>
        <p className="text-base leading-relaxed">
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (“Personal Data”). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <p className="text-base leading-relaxed">
          We may use your Personal Data to contact you with newsletters,
          marketing or promotional materials, and other information that may be
          of interest to you. You may opt-out of receiving any or all of these
          communications by following the unsubscribe link or by emailing
          support@striform.io.
        </p>

        {/* Usage Data */}
        <h3 className="text-xl font-semibold">b. Usage Data</h3>
        <p className="text-base leading-relaxed">
          We may also collect information that your browser sends whenever you
          visit our Service or when you access Service by or through a mobile
          device. This Usage Data may include information such as your
          computer's Internet Protocol address (e.g., IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>
      </div>

      {/* Use of Data */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">5. Use of Data</h2>
        <p className="text-base leading-relaxed">
          striform uses the collected data for various purposes:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>To provide and maintain our Service;</li>
          <li>To notify you about changes to our Service;</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so;
          </li>
          <li>To provide customer support;</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our Service;
          </li>
          <li>To monitor the usage of our Service;</li>
          <li>To detect, prevent, and address technical issues;</li>
          <li>To fulfill any other purpose for which you provide it;</li>
          <li>
            To carry out our obligations and enforce our rights arising from any
            contracts entered into between you and us, including for billing and
            collection;
          </li>
          <li>
            To provide you with notices about your account and/or subscription,
            including expiration and renewal notices, email instructions, etc.;
          </li>
          <li>
            To provide you with news, special offers, and general information
            about other goods, services, and events that we offer which are
            similar to those that you have already purchased or inquired about,
            unless you have opted not to receive such information;
          </li>
          <li>
            In any other way we may describe when you provide the information;
            and
          </li>
          <li>For any other purpose with your consent.</li>
        </ol>
      </div>

      {/* Retention of Data */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">6. Retention of Data</h2>
        <p className="text-base leading-relaxed">
          We will retain your Personal Data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your Personal Data to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our legal agreements and
          policies.
        </p>
        <p className="text-base leading-relaxed">
          We will also retain Usage Data for internal analysis purposes. Usage
          Data is generally retained for a shorter period, except when this data
          is used to strengthen the security or to improve the functionality of
          our Service, or we are legally obligated to retain this data for
          longer time periods.
        </p>
      </div>

      {/* Transfer of Data */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">7. Transfer of Data</h2>
        <p className="text-base leading-relaxed">
          Your information, including Personal Data, may be transferred to—and
          maintained on—computers located outside of your state, province,
          country, or other governmental jurisdiction where the data protection
          laws may differ from those in your jurisdiction.
        </p>
        <p className="text-base leading-relaxed">
          If you are located outside India and choose to provide information to
          us, please note that we transfer the data, including Personal Data, to
          India and process it there. Your consent to this Privacy Policy
          followed by your submission of such information represents your
          agreement to that transfer.
        </p>
        <p className="text-base leading-relaxed">
          striform will take all the steps reasonably necessary to ensure that
          your data is treated securely and in accordance with this Privacy
          Policy. No transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>
      </div>

      {/* Payments */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">8. Payments</h2>
        <p className="text-base leading-relaxed">
          We may provide paid products and/or services within Service. In that
          case, we use third-party services for payment processing (e.g.,
          payment processors). We will not store or collect your payment card
          details. That information is provided directly to our third-party
          payment processors whose use of your personal information is governed
          by their Privacy Policy.
        </p>
      </div>

      {/* Changes to This Privacy Policy */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-base leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. We will
          let you know via email and/or a prominent notice on our Service, prior
          to the change becoming effective and update the “effective date” at
          the top of this Privacy Policy.
        </p>
        <p className="text-base leading-relaxed">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </div>

      {/* Contact Us */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">10. Contact Us</h2>
        <p className="text-base leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at: support@striform.io.
        </p>
      </div>
    </div>
  );

  return (
    <div className={"bg-[#F6E1A8]"}>
      <NavBar />
      <ContentBox title={"PrivacyPolicy"} content={textInPrivacyPolicy} />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
