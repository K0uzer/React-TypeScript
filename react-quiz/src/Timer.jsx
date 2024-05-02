import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemainig }) => {
    useEffect(() => {
        setInterval(() => {
            dispatch({ type: 'tick' })
        }, 1000)
    }, [dispatch])
    return <div className="timer">{secondsRemainig}</div>
}

export default Timer
