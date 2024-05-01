import React from 'react'

const Question = ({ question }) => {
    return (
        <div>
            <h4>{question.question}</h4>
            <div>
                {question.option.map((option) => (
                    <button className="btn btn-option" key={option}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question
