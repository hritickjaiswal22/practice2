interface AccordionPropTypes {
  children: React.ReactNode;
}

interface AccordionTogglePropTypes extends AccordionPropTypes {}

interface AccordionPanelPropTypes extends AccordionPropTypes {}

interface AccordionItemPropTypes extends AccordionPropTypes {
  id: number;
}

interface AccordionContextTypes {
  activePanel: number;
  setActivePanel: (id: number) => void;
  totalAccordionItems: number;
}

interface AccordionItemContextTypes {
  id: number;
}

export type {
  AccordionPropTypes,
  AccordionItemPropTypes,
  AccordionTogglePropTypes,
  AccordionPanelPropTypes,
  AccordionContextTypes,
  AccordionItemContextTypes,
};
