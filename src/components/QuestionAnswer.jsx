import { useState } from 'react';

export default function QuestionAnswer({ title, paragraph }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`h-fit relative px-7 py-8 bg-white rounded-xl border-2 border-neutral-800 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'bg-white' : 'bg-[#fce8dd]'
                }`}
        >
            {/* FAQ Header */}
            <h3 className="text-neutral-800 text-[22px] font-semibold leading-[33px]">
                {title}
            </h3>

            {/* FAQ Body */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <hr className="w-full my-4 border-2 rounded-full border-neutral-800" />
                <p className="text-[#333333] text-xl font-medium leading-[30px]">
                    {paragraph}
                </p>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-5 flex items-center justify-center bg-[#fff5ef] rounded-md border-2 border-neutral-800 w-[40px] h-[40px] transition-all hover:shadow-[1px_1px_0px_1px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_0px_0px_rgba(30,30,30,1.00)]"
            >
                <span className="relative text-3xl top-[1px]">{isOpen ? '-' : '+'}</span>
            </button>
        </div>
    );
}
