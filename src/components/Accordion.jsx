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
        <div>
          <svg
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="46.9458"
              y="0.754883"
              width="16"
              height="2"
              transform="rotate(46.1976 46.9458 0.754883)"
              fill="#D9D9D9"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && `!rotate-180`
              }`}
            />
            <rect
              x="46.9458"
              y="0.754883"
              width="16"
              height="2"
              transform="rotate(46.1976 46.9458 0.754883)"
              fill="#D9D9D9"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            {/* <path
              d="M17.6401 46.8726C61.6389 46.5399 73.6385 46.4492 74.1385 46.4454"
              stroke="black"
              stroke-width="4"
            />
            <path
              d="M46.5911 17.7217C44.9286 61.6903 44.4752 73.6817 44.4563 74.1813"
              stroke="black"
              stroke-width="4"
            />
            <path
              d="M51.0017 3.04858C11.6743 2.9804 0.948685 2.9618 0.501783 2.96103"
              stroke="black"
              stroke-width="4"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            /> */}
          </svg>

          {/* <svg
            width="51"
            height="6"
            viewBox="0 0 51 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          >
         
          </svg> */}
        </div>
        {/* <svg
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
        </svg> */}
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
