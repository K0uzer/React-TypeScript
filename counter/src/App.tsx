import React, { useState } from 'react';
import './App.css';

interface counterButton {
  sum:number,
  typeOfChange: string,
  set: any,
}

function App() {
  return (
    <div className="App">
      <Counter />
      <p></p>
    </div>
  );
}

const Counter: React.FC = () => {

  const [step, setStep] = useState(1)
  const [count, countStep] = useState(1)

  const date: Date = new Date();
  date.setDate(date.getDate() + count)

  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <Button sum={1} typeOfChange="-" set={setStep}/>
        <p>Step {step}</p>
        <Button sum={1} typeOfChange="+" set={setStep}/>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <Button sum={step} typeOfChange="-" set={countStep}/>
        <p>Count {count}</p>
        <Button sum={step} typeOfChange="+" set={countStep}/>
      </div>
      <p>
        <span>
          { count === 0 ? "Today is " : count > 0 ? `${count} day from today is ` : `${Math.abs(count)} days ago was ` }
        </span>
          {date.toDateString()}
      </p>
    </>
  )
}

const Button = ({sum, typeOfChange, set}: counterButton) => {

  const handleButtonClick = () => {
    set((s:any) => typeOfChange === '+' ? s + sum : s - sum)
  }

  return (
    <button onClick={handleButtonClick}>{typeOfChange}</button>
  )
}

export default App;
