import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg sm:grid">
      <Accordion
        Title="Do you want me to be your nigga??"
        Answer1="No"
        Answer2="Yes"
      />
      <Accordion
        Title="Can I be your Boyfriend and later BoyLover??"
        Answer1="No"
        Answer2="Yes"
      />
      <Accordion Title="Will you Marry me??" Answer1="No" Answer2="Yes" />
    </div>
  );
};

export default FAQ;
