import React from 'react';

const FrmQuestion = ({text}) => {
    return (
        <h3 className={"text-xl font-semibold"}>{text}</h3>
    )
}
const FrmQuestionController = ({ text, onTextChange }) => {
    const handleChange = (e) => {
        onTextChange(e.target.value);
    };

    return (
        <div className={"text-sm"}>
            <label htmlFor="question-text" className="flex flex-col">
                <span className="font-semibold">Question Title</span>
                <input
                    id="question-text"
                    value={text}
                    className="border outline-none w-[90%] border-black/50 shadow-sm rounded-md p-2"
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export {FrmQuestionController, FrmQuestion};
