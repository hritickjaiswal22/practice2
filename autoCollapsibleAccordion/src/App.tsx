import "./App.css";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "./components/accordion/accordion";

function App() {
  return (
    <Accordion>
      <AccordionItem id={1}>
        <AccordionToggle>Toggle 1</AccordionToggle>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
      <AccordionItem id={2}>
        <AccordionToggle>Toggle 2</AccordionToggle>
        <AccordionPanel>Panel 2</AccordionPanel>
      </AccordionItem>
      <AccordionItem id={3}>
        <AccordionToggle>Toggle 3</AccordionToggle>
        <AccordionPanel>Panel 3</AccordionPanel>
      </AccordionItem>
      <AccordionItem id={4}>
        <AccordionToggle>Toggle 4</AccordionToggle>
        <AccordionPanel>Panel 4</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default App;
