import Accordion from "./Accordion";
import shrekFunnyPic from "../assets/shrek-funny-pic.jpg";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion>
        {" "}
        Questions="Do you want me to be your nigga??" Answer1="No" Answer2="Yes"
        Image="/two-racoon-funny-pic.jpg"
      </Accordion>
      <Accordion
        Questions="Can I be your Boyfriend and later BoyLover??"
        Answer1="No"
        Answer2="Yes"
        Image="/two-racoon-funny-pic.jpg"
      />
      <Accordion
        Questions="Will you Marry me??"
        Answer1="No"
        Answer2="Yes"
        Image="<img src={shrekFunnyPic} alt=''/>"
      />
    </div>
  );
};

export default FAQ;
