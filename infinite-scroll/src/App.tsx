import React, { useRef, useState } from "react";
import "./App.css";

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

function App() {
  const [elements, setElements] = useState<number>(10);
  const containerRef = useRef<HTMLDivElement>(null);

  function apiCall() {
    console.log("Api called");

    new Promise((resolve) => setTimeout(() => resolve(""), 2000)).then(() =>
      setElements((prev) => prev + 10)
    );
  }

  function scrollHandler(event: React.UIEvent<HTMLDivElement>) {
    const scrollTop = (event.target as HTMLElement).scrollTop; // scrollTop position
    const clientHeight = (event.target as HTMLElement).clientHeight; // element's actual height
    const scrollHeight = (event.target as HTMLElement).scrollHeight; // element's total height after scrolling

    if (scrollTop + clientHeight >= scrollHeight - 30) {
      console.log("Calling");

      apiCall();
    }
  }

  console.log(elements);

  return (
    <main
      className="container"
      onScroll={debounce(scrollHandler)}
      ref={containerRef}
    >
      {Array.from({ length: elements }, (_, index) => (
        <div className="box" key={index}>
          {index + 1}
        </div>
      ))}
      <h1>Loading...</h1>
    </main>
  );
}

export default App;
