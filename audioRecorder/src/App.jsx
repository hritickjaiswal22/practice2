import "./App.css";

// Roughly 2 hours for functionality without sine waves

import AudioRecorder from "./containers/audioRecorder";

function App() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
    return <h1>Media Recorder Not Available</h1>;

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <AudioRecorder />
    </main>
  );
}

export default App;
