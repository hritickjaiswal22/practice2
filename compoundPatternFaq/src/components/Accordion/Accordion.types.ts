interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionToggleProps extends AccordionProps {}

interface AccordionPanelProps extends AccordionProps {}

interface AccordionItemProps {
  children: React.ReactNode;
  id: number;
}

interface AccordionContextTypes {
  setActivePanel: React.Dispatch<React.SetStateAction<number>>;
  activePanel: number;
}

interface AccordionItemContextTypes {
  id: number;
}

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionToggleProps,
  AccordionPanelProps,
  AccordionContextTypes,
  AccordionItemContextTypes,
};
