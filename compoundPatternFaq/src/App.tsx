import "./App.css";

import Accordion, {
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "./components/Accordion/Accordion";

function App() {
  return (
    <main style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <Accordion>
        <AccordionItem id={1}>
          <AccordionToggle>Toggle 1</AccordionToggle>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem id={2}>
          <AccordionToggle>Toggle 2</AccordionToggle>
          <AccordionPanel>Panel 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
