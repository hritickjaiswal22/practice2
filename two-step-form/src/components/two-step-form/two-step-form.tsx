import { useState } from "react";

interface StepType {
  step1: boolean;
  step2: boolean;
}

interface FormPropsType {
  submitHandler: (e: React.SyntheticEvent) => void;
}

function wait(delay = 1000): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const Form1 = (props: FormPropsType) => {
  const { submitHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <input type="email" required />
      <button>Submit</button>
    </form>
  );
};

const Form2 = (props: FormPropsType) => {
  const { submitHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <input type="password" required />
      <button>Submit</button>
    </form>
  );
};

const TwoStepForm = () => {
  const [step, setStep] = useState<StepType>({
    step1: false,
    step2: false,
  });

  async function submitHandler1(e: React.SyntheticEvent) {
    e.preventDefault();
    await wait();
    console.log("Submitted1");
    setStep((prevStep) => {
      return {
        ...prevStep,
        step1: true,
      };
    });
  }

  async function submitHandler2(e: React.SyntheticEvent) {
    e.preventDefault();
    await wait();
    console.log("Submitted2");
    setStep((prevStep) => {
      return {
        ...prevStep,
        step2: true,
      };
    });
  }

  if (step.step1 && step.step2) return <div>Complete</div>;
  else if (step.step1 && !step.step2)
    return <Form2 submitHandler={submitHandler2} />;
  else return <Form1 submitHandler={submitHandler1} />;
};

export default TwoStepForm;
