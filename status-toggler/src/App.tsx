import "./App.css";

import StatusToggler from "./components/status-toggler";

function App() {
  const employeeList = [
    { fName: "Naruto", lName: "Uzumaki" },
    { fName: "Sasuke", lName: "Uchiha" },
    { fName: "Sakura", lName: "Haruno" },
  ];
  return <StatusToggler employees={employeeList} />;
}

export default App;
