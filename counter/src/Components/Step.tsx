import React from 'react';
import Button from '../UI/Button';

interface StepProps {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}

const Step = ({step, setStep}:StepProps) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <Button sum={1} typeOfChange="-" onClick={setStep}/>
            <p>Step {step}</p>
            <Button sum={1} typeOfChange="+" onClick={setStep}/>
        </div>
    )
}

export default Step