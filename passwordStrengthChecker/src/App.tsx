import { useState } from "react";

import "./App.css";
import PasswordChecker from "./components/passwordChecker";
import ProgressBar from "./components/progressBar";

function App() {
  const [progress, setProgress] = useState(0);

  function getStrengthInWords(val: number) {
    val = val / 10;
    if (val < 6) return "weak";
    else if (val >= 6 && val <= 8) return "moderate";
    else return "strong";
  }

  function getStrength(value: string) {
    if (value.length > 3) {
      let capitalLetters = 0;
      let smallLetters = 0;
      let digits = 0;
      let specialLetters = 0;
      let temp = 0;

      for (let i = 0; i < value.length; i++) {
        const asci = value[i].charCodeAt(0);

        if (asci >= 97 && asci <= 122) smallLetters++;
        else if (asci >= 65 && asci <= 90) capitalLetters++;
        else if (asci >= 48 && asci <= 57) digits++;
        else specialLetters++;
      }

      if (capitalLetters) temp++;
      if (smallLetters) temp++;
      if (digits) temp++;
      if (specialLetters) temp++;
      if (capitalLetters > 3) temp++;
      if (smallLetters > 3) temp++;
      if (digits > 2) temp++;
      if (specialLetters > 3) temp += 3;

      setProgress(getProgress(temp));

      return temp;
    }
    setProgress(0);
    return 0;
  }

  function getProgress(val: number) {
    return val * 10;
  }

  return (
    <PasswordChecker getStrength={getStrength}>
      <ProgressBar getBgColor={getStrengthInWords} progress={progress} />
    </PasswordChecker>
  );
}

export default App;
