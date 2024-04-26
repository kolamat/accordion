import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ Questions, Answer1, Answer2 }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className={`text-black`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full text-left items-center`}
      >
        <div>{Questions}</div>
        {accordionOpen ? (
          <FaMinus
            className={`transform origin-center transition duration-500 ease-out ${
              accordionOpen && `!rotate-180`
            }`}
          />
        ) : (
          <FaPlus
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        )}
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
