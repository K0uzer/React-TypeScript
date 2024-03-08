import { useState } from 'react'
import './index.css'
import React from 'react'

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
]

export default function App() {
    return (
        <div>
            <Steps />
            {/* <Steps /> */}
        </div>
    )
}

const Button = ({ textColor, bgColor, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            {children}
        </button>
    )
}

const StepMessage = ({ step, children }) => {
    return (
        <p className="message">
            <h3>Step {step}</h3>
            {children}
        </p>
    )
}

const Steps = () => {
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    const handlePrevious = () => {
        if (step > 1) setStep((s) => s - 1)
    }

    const handleNext = () => {
        if (step < 3) setStep((s) => s + 1)
    }

    return (
        <div>
            <button
                type="button"
                className="close"
                onClick={() => setIsOpen((is) => !is)}
            >
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    {/* <p className="message">
                        Step {step}:{messages[step - 1]}
                    </p> */}

                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handlePrevious}
                        >
                            <span>👈</span>Previous
                        </Button>
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            Next<span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
