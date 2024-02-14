import React, { FC } from 'react'

interface ClearButtonProps {
    step: number,
    count:number,
    clearContent: () => void
}

const ClearButton = ({step, count, clearContent}:ClearButtonProps) => {
    return (
        <>{(count !== 0 || step !== 0 ) && <button onClick={clearContent}>Clear</button>}</>
    )
}

export default ClearButton