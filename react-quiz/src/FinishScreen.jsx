import React from 'react'

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
    let emoji
    const percentage = (points / maxPoints) * 100
    if (percentage === 100) emoji = '😎'
    if (percentage >= 80 && percentage < 100) emoji = '🚀'
    if (percentage >= 60 && percentage < 80) emoji = '😁'
    if (percentage >= 40 && percentage < 60) emoji = '👌'
    if (percentage >= 0 && percentage < 40) emoji = '😒'

    return (
        <>
            <p className="result">
                <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
                {maxPoints}({percentage.toFixed(0)}%)
            </p>
            <p className="highscore">(Highscore: {highscore} points)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'restart' })}
            >
                Get restart
            </button>
        </>
    )
}

export default FinishScreen
