import React, { useState } from "react";

const Accordion = () => {
  [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <button className={`flex justify-between w-full`}>
        <span>This is The Title</span>
        <span>+</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? `grid-rows-[1fr] opacity-100`
            : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <div className={`overflow-hidden`}>This Is The Anwser</div>
      </div>
    </div>
  );
};

export default Accordion;
