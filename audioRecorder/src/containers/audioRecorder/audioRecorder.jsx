import { useEffect, useRef, useState } from "react";

import useAudioMediaDevice from "./useAudioMediaDevice";
import RecorderBody from "../../components/recorderBody";
import Btn from "../../components/btn";
import Audio from "../../components/audio";

const RECORDINGSTATE = {
  IDLE: "IDLE",
  RECORD: "RECORD",
  STOP: "STOP",
};

function AudioRecorder() {
  const { isAllowed, stream } = useAudioMediaDevice();
  const [recordState, setRecordState] = useState(RECORDINGSTATE.IDLE);
  const mediaRecorder = useRef(null);
  const [audioUrls, setAudioUrls] = useState([]);

  useEffect(() => {
    if (stream) {
      console.log(stream);
      mediaRecorder.current = new MediaRecorder(stream);
    }
  }, [stream]);

  function onRecordHandler() {
    if (mediaRecorder.current) {
      mediaRecorder.current.start();
      setRecordState(RECORDINGSTATE.RECORD);
    }
  }

  function onStopHandler() {
    if (mediaRecorder.current) {
      let chunks = [];
      mediaRecorder.current.stop();

      mediaRecorder.current.ondataavailable = function (e) {
        chunks.push(e.data);
      };

      mediaRecorder.current.onstop = function () {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        setAudioUrls((prev) => [...prev, audioURL]);
        setRecordState(RECORDINGSTATE.IDLE);
      };
    }
  }

  function btnClickHandler() {
    switch (recordState) {
      case RECORDINGSTATE.IDLE:
        onRecordHandler();
        break;
      case RECORDINGSTATE.RECORD:
        onStopHandler();
        break;

      default:
        break;
    }
  }

  if (!isAllowed) return <h1>Permission Not Given</h1>;

  console.log(audioUrls);

  return (
    <>
      <RecorderBody>
        <>
          <Btn clickHandler={btnClickHandler}>
            {recordState === RECORDINGSTATE.IDLE ? "Record" : "Stop"}
          </Btn>
        </>
      </RecorderBody>
      {audioUrls.map((url) => (
        <Audio src={url} />
      ))}
    </>
  );
}

export default AudioRecorder;
