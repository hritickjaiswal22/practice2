import Timer from "./components/timer";

function App() {
  return (
    <main>
      <Timer onExpire={() => alert("Expire")} />
    </main>
  );
}

export default App;
