import { createContext, useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";

const AccordianContext = createContext;

export default function Accordion1({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  return (
    <li className="border-b">
      <header role="button" onClick={() => setSelected(open ? null : value)}>
        {trigger}
        <FaMinus size={16} />
      </header>
      <div className="overflow-y-hidden" style={{ height: open ? "100%" : 0 }}>
        <div className="p-2 pb-4">{children}</div>
      </div>
    </li>
  );
}
