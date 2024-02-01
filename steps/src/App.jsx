import { useState } from 'react';
import './index.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  const [step, setStep] = useState(0);

  const count = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 1 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 1 ? 'active' : ''}`}>3</div>
      </div>

      <p className="message">Step {step + 1}: {messages[step]}</p>

      <div className='buttons'>
        <button  style={{backgroundColor:"#7950f2", color: "#fff"}}>Previous</button>
        <button  style={{backgroundColor:"#7950f2", color: "#fff"}}>Next</button>
      </div>
    </div>
  );
}

