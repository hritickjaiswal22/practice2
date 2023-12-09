import React, { Children, useEffect, useRef, useState } from "react";

import {
  AccordionItemPropTypes,
  AccordionPanelPropTypes,
  AccordionPropTypes,
  AccordionTogglePropTypes,
} from "./accordion.types";
import { AccordionContext, AccordionItemContext } from "./accordion.contexts";
import { useAccordion, useAccordionItem } from "./accordion.hooks";

function AccordionItem({ children, id }: AccordionItemPropTypes) {
  return (
    <AccordionItemContext.Provider
      value={{
        id,
      }}
    >
      <>{children}</>
    </AccordionItemContext.Provider>
  );
}

function AccordionToggle({ children }: AccordionTogglePropTypes) {
  const { setActivePanel } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <div>
      <button onClick={() => setActivePanel(id)}>{children}</button>
    </div>
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
      {children}
    </AccordionContext.Provider>
  );
}

export default Accordion;
export { Accordion, AccordionItem, AccordionPanel, AccordionToggle };
