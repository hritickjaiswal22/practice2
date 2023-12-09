import { useState } from "react";

import {
  AccordionProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionToggleProps,
} from "./Accordion.types";
import { AccordionContext, AccordionItemContext } from "./Accordion.contexts";
import { useAccordion, useAccordionItem } from "./Accordion.hooks";
import styles from "./Accordion.module.css";

function AccordionItem({ children, id }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider
      value={{
        id,
      }}
    >
      <div className={styles["accordion-item"]}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

function AccordionToggle({ children }: AccordionToggleProps) {
  const { setActivePanel } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <button className={styles["toggle-btn"]} onClick={() => setActivePanel(id)}>
      {children}
    </button>
  );
}

function AccordionPanel({ children }: AccordionPanelProps) {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  if (activePanel !== id) return <></>;

  return <p>{children}</p>;
}

function Accordion({ children }: AccordionProps) {
  const [activePanel, setActivePanel] = useState(1);

  return (
    <AccordionContext.Provider
      value={{
        activePanel,
        setActivePanel,
      }}
    >
      <section className={styles["accordion"]}>{children}</section>
    </AccordionContext.Provider>
  );
}

export default Accordion;
export { AccordionItem, AccordionToggle, AccordionPanel };
