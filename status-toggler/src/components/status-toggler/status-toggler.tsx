import { useState } from "react";

interface Employeetype {
  fName: string;
  lName: string;
}

type Props = {
  employees: Array<Employeetype>;
};

const StatusToggler = (props: Props) => {
  const { employees } = props;
  const [onlineList, setOnlineList] = useState(
    Array(employees.length).fill(true)
  );

  function toggleStatus(index: number) {
    const temp = [...onlineList];
    temp[index] = !temp[index];

    setOnlineList(temp);
  }

  return (
    <main>
      {employees.map((employee, index) => (
        <div>
          <h1 onClick={() => toggleStatus(index)}>
            {employee.fName} {employee.lName}
          </h1>
          <h1>Status {onlineList[index] ? "Online" : "Offline"}</h1>
        </div>
      ))}
    </main>
  );
};

export default StatusToggler;
