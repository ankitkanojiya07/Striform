import React, { useState } from 'react';
import {FaArrowRightLong} from "react-icons/fa6";

const FrmBtn = ({ cl = "", text = "Let's Start", onClick = () => {
    console.log("Button Clicked!");
}}) => {
    return (
        <div>
            <button onClick={onClick} className={`flex items-center justify-center text-sm gap-4 bg-black/80 font-semibold px-6 p-3 rounded-md text-gray-100 ${cl}`}>
                {text}
                <FaArrowRightLong />
            </button>
        </div>
    );
};

const FrmBtnController = ({ text, onTextChange }) => {
    const handleChange = (e) => {
        onTextChange(e.target.value);
    };

    return (
        <div className={"text-sm"}>
            <label htmlFor={"btn-text"} className={"flex flex-col"}>
                <span className={"font-semibold"}>Button Text</span>
                <input id={"btn-text"} value={text} className={"border outline-none w-[90%] border-black/50 shadow-sm rounded-md p-2"} onChange={handleChange} />
            </label>
        </div>
    );
};

export { FrmBtn, FrmBtnController };
