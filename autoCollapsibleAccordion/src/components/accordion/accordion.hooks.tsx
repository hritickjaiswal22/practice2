import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./accordion.contexts";

function useAccordion() {
  const { activePanel, setActivePanel, totalAccordionItems } =
    useContext(AccordionContext);

  return { activePanel, setActivePanel, totalAccordionItems };
}

function useAccordionItem() {
  const { id } = useContext(AccordionItemContext);

  return { id };
}

export { useAccordion, useAccordionItem };
