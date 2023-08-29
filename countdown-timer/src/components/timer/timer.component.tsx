import React from "react";

interface TimerProps {
  onExpire: () => void;
}

const TimerComponent = (props: TimerProps) => {
  const { onExpire } = props;
  const [countdown, setCountdown] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  function onSubmitHandler(e: React.SyntheticEvent) {
    e.preventDefault();

    const time = Number(e.target[0].value);

    recurse(time);
  }

  function clearTimerTimeout() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  function recurse(time: number) {
    if (time >= 0) {
      setCountdown(time);
      clearTimerTimeout();
      if (time - 1 < 0 && onExpire) {
        onExpire();
      }
      timerRef.current = setTimeout(() => recurse(time - 1), 1000);
    } else clearTimerTimeout();
  }

  function reset() {
    clearTimerTimeout();
    setCountdown(0);
    if (onExpire) onExpire();
  }

  return (
    <main>
      <form onSubmit={onSubmitHandler}>
        <input min={0} type="number" />
        <button>Submit</button>
      </form>

      <h1>
        {Math.floor(countdown / 3600)} hours {Math.floor(countdown / 60)}{" "}
        minutes {Math.floor(countdown)} seconds
      </h1>
      <button onClick={reset}>Reset</button>
    </main>
  );
};

export default TimerComponent;
