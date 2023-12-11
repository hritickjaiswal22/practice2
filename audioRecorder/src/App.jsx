import "./App.css";

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
      }}
    >
      <AudioRecorder />
    </main>
  );
}

export default App;
