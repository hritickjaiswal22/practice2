import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./Accordion.contexts";

function useAccordion() {
  const { activePanel, setActivePanel } = useContext(AccordionContext);

  return { activePanel, setActivePanel };
}

function useAccordionItem() {
  const { id } = useContext(AccordionItemContext);

  return { id };
}

export { useAccordion, useAccordionItem };
