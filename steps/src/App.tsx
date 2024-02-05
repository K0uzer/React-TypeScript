import { useState } from 'react';
import './index.css'
import React from 'react';

const messages:string[] = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  )
}

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if(step > 1) setStep((s:number) => s - 1)
  }

  const handleNext = () => {
    if(step < 3) setStep((s:number) => s + 1)
  }

  return (
    <div>
      <button type="button" className='close' onClick={() => setIsOpen((is:boolean) =>!is)}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">Step {step}: {messages[step - 1]}</p>

          <div className='buttons'>
            <button onClick={handlePrevious} style={{backgroundColor:"#7950f2", color: "#fff"}}>Previous</button>
            <button onClick={handleNext} style={{backgroundColor:"#7950f2", color: "#fff"}}>Next</button>
          </div>
        </div>)
      }
    </div>);
}

