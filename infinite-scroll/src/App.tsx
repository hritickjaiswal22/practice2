import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [elements, setElements] = useState<number>(10);
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollHandler(event: React.UIEvent<HTMLDivElement>) {
    const scrollTop = (event.target as HTMLElement).scrollTop; // scrollTop position
    const clientHeight = (event.target as HTMLElement).clientHeight; // element's actual height
    const scrollHeight = (event.target as HTMLElement).scrollHeight; // element's total height after scrolling

    if (scrollTop + clientHeight >= scrollHeight - 30)
      setElements((prev) => prev + 10);
  }

  return (
    <main className="container" onScroll={scrollHandler} ref={containerRef}>
      {Array.from({ length: elements }, (_, index) => (
        <div className="box" key={index}>
          {index + 1}
        </div>
      ))}
    </main>
  );
}

export default App;
