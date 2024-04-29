import Accordion1, { AccordianItem } from "./accordion1";

const AccordionMain = () => {
  return (
    <div>
      <Accordion1 className="max-w-lg">
        <AccordianItem value="1" trigger="Accordian item 1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          recusandae? Dolor quod dolorum, nam nihil odio dicta at totam, quasi
          ullam provident vero sit impedit? Consequatur accusamus eaque quo
          quidem.
        </AccordianItem>
        <AccordianItem value="2" trigger="Accordian item 2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          recusandae? Dolor quod dolorum, nam nihil odio dicta at totam, quasi
          ullam provident vero sit impedit? Consequatur accusamus eaque quo
          quidem.
        </AccordianItem>
        <AccordianItem value="3" trigger="Accordian item 3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          recusandae? Dolor quod dolorum, nam nihil odio dicta at totam, quasi
          ullam provident vero sit impedit? Consequatur accusamus eaque quo
          quidem.
        </AccordianItem>
      </Accordion1>
    </div>
  );
};

export default AccordionMain;
