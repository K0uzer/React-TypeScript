import React from 'react';

interface StepProps {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}

const Step = ({step, setStep}:StepProps) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <input type="range" min={0} max={10} onChange={(e) => setStep(+e.target.value)} value={step} />
            <p>{step}</p>
        </div>
    )
}

export default Step