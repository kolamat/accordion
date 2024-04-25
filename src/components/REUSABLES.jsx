import React from "react";
import Accordion from "./Accordion";
import plus from "../assets/plus.png";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        Questions="Do you want me to be your nigga??"
        Answer1="No"
        Answer2="Yes"
      />
      <Accordion
        Questions="Can I be your Boyfriend and later BoyLover??"
        Answer1="No"
        Answer2="Yes"
        image={plus}
      />
      <Accordion Questions="Will you Marry me??" Answer1="No" Answer2="Yes" />
    </div>
  );
};

export default FAQ;
