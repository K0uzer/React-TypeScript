import './App.css';
import { useState } from 'react';
import Step from './Components/Step';
import Count from './Components/Count';

const date = new Date();

const App = () => {

  const [step, setStep] = useState(0)
  const [count, countStep] = useState(0)

  date.setDate(date.getDate() + count);

  let content = `Today is ${date.toDateString()}`;
  if(count > 0) content = `${count} day from today is ${date.toDateString()}`;
  if(count < 0) content = `${Math.abs(count)} days ago was ${date.toDateString()}`;

  return (
    <div className="App">
        <Step step={step} setStep={setStep} />
        <Count step={step} count={count} countStep={countStep} />
        <p>{content}</p>
    </div>
  );
}

export default App;
