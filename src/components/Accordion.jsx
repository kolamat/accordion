import React, { useState } from "react";
import plusMinus from "../assets/plus&minus.svg";

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
        <plusMinus />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? `grid-rows-[1fr] opacity-100`
            : `grid-rows-[0fr] opacity-0`
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
