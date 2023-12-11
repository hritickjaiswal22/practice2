import { useEffect, useState } from "react";

const constraints = { audio: true };

function useAudioMediaDevice() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(
        (stream) => {
          setStream(stream);
          setIsAllowed(true);
        },
        () => setIsAllowed(false)
      )
      .catch(() => setIsAllowed(false));
  }, []);

  return {
    isAllowed,
    stream,
  };
}

export default useAudioMediaDevice;
