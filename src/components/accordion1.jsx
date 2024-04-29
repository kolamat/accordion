import { createContext, useEffect, useState } from "react";

const AccordionContext = createContext;

export default function Accordion1({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider>{children}</AccordionContext.Provider>
    </ul>
  );
}
