import React, { useState } from "react";

const Accordion = ({ Title, Answer1, Answer2 }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full`}
      >
        <span>{Title}</span>
        {/* {accordionOpen ? <span>---</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && `!rotate-180`
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? `grid-rows-[0.5] opacity-100`
            : ` grid-rows-none opacity-0`
        }`}
      >
        <div className={`overflow-hidden`}>
          {Answer1} <input type="checkbox" className={`cursor-pointer`} />
        </div>
        <div className={`overflow-hidden`}>
          {Answer2} <input type="checkbox" className={`cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
