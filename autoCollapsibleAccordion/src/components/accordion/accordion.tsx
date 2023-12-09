import React, { Children, useEffect, useRef, useState } from "react";

import {
  AccordionItemPropTypes,
  AccordionPanelPropTypes,
  AccordionPropTypes,
  AccordionTogglePropTypes,
} from "./accordion.types";
import { AccordionContext, AccordionItemContext } from "./accordion.contexts";
import { useAccordion, useAccordionItem } from "./accordion.hooks";
import styles from "./accordion.module.css";
import AutoProgress from "../autoProgress/autoProgress";

function AccordionItem({ children, id }: AccordionItemPropTypes) {
  const { activePanel } = useAccordion();

  return (
    <AccordionItemContext.Provider
      value={{
        id,
      }}
    >
      {activePanel === id ? <AutoProgress /> : ""}
      <>{children}</>
    </AccordionItemContext.Provider>
  );
}

function AccordionToggle({ children }: AccordionTogglePropTypes) {
  const { setActivePanel } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <>
      <button
        className={styles["toggle-btn"]}
        onClick={() => setActivePanel(id)}
      >
        {children}
      </button>
    </>
  );
}

function AccordionPanel({ children }: AccordionPanelPropTypes) {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  if (activePanel !== id) return <></>;

  return <p>{children}</p>;
}

function Accordion({ children }: AccordionPropTypes) {
  const [activePanel, setActivePanel] = useState(1);
  const timerId = useRef(-1);

  function clickHandler(id: number) {
    clearTimeout(timerId.current);
    setActivePanel(id);
  }

  useEffect(() => {
    let nextId = activePanel + 1;

    if (nextId > Children.count(children)) nextId = 1;

    timerId.current = setTimeout(() => setActivePanel(nextId), 3000);
  }, [activePanel]);

  return (
    <AccordionContext.Provider
      value={{
        activePanel,
        setActivePanel: clickHandler,
        totalAccordionItems: Children.count(children),
      }}
    >
      <section className={styles["accordion"]}>{children}</section>
    </AccordionContext.Provider>
  );
}

export default Accordion;
export { Accordion, AccordionItem, AccordionPanel, AccordionToggle };
