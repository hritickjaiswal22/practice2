import { createContext } from "react";

import {
  AccordionContextTypes,
  AccordionItemContextTypes,
} from "./Accordion.types";

const AccordionContext = createContext<AccordionContextTypes>(null);
const AccordionItemContext = createContext<AccordionItemContextTypes>({
  id: -1,
});

export { AccordionContext, AccordionItemContext };
