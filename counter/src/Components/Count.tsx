import React from 'react';
import Button from '../UI/Button';

interface CountProps {
    count:number,
    step:number,
    countStep: React.Dispatch<React.SetStateAction<number>>
}

const Count = ({count, step, countStep}:CountProps) => {
return (
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <Button sum={step} typeOfChange="-" onClick={countStep}/>
        <p>Count {count}</p>
        <Button sum={step} typeOfChange="+" onClick={countStep}/>
    </div>
)}

export default Count