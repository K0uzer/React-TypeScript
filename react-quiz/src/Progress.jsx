import React from 'react'

const Progress = ({ index, numQuestions, points, maxPoints, answer }) => {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + +answer !== null} />
            <p>
                <span style={{ marginRight: 10 }}>Question</span>
                <strong>
                    {index + 1}
                    <strong /> / {numQuestions}
                </strong>
            </p>
            <p>
                <strong>{points}</strong> / {maxPoints}
            </p>
        </header>
    )
}

export default Progress
