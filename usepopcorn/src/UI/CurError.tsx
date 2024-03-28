import React from 'react'

const CurError = ({ text }: any) => {
    return (
        <p className="error">
            {text} <span>📛</span>
        </p>
    )
}

export default CurError
