'use client';

import {useState} from "react";

export default function FaqItem({item}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`${isOpen ? "bg-slate-800 text-white" : "bg-slate-200"} m-1.5 cursor-pointer hover:bg-blue-300 hover:text-black`} onClick={toggleAnswer}>
            <div className="flex py-2 px-4">
                <p className="grow">{item.q}</p>
                <svg className={isOpen ? "rotate-180" : ""} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" fill="none" width="24" height="24"/>
                    <g>
                        <path d="M7 10l5 5 5-5"/>
                    </g>
                </svg>
            </div>
            <p className={"py-2 px-4 " + (!isOpen ? "hidden" : "")}>{item.a}</p>
        </div>
    )
}