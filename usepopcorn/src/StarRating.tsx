import { useState } from 'react'

type StarRatingProps = {
    maxRating: number
    color: string | ''
    size: number
    className: string | ''
    massages: string[] | ''
    defaultRating: number
    onSetRating: any
}

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
}

const starContainerStyle = {
    display: 'flex',
}

const StarRating = ({
    maxRating = 5,
    color = '#fcc419',
    size = 48,
    className = '',
    massages = [],
    defaultRating = 0,
    onSetRating,
}: StarRatingProps) => {
    const [rating, setRating] = useState(defaultRating)
    const [tempRating, setTempRating] = useState(0)

    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color,
        fontSize: `${size}px`,
    }

    const handleRate = (rating: number) => {
        setRating(rating + 1)
        onSetRating(rating)
    }

    const handleTempRating = (rating: number) => {
        setTempRating(rating + 1)
    }

    const clearTempRating = (rating: number) => {
        setTempRating(rating)
    }

    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        key={i}
                        onMouseOver={() => handleTempRating(i)}
                        onRate={() => handleRate(i)}
                        full={
                            !tempRating ? rating >= i + 1 : tempRating >= i + 1
                        }
                        clearTempRating={() => clearTempRating(i)}
                        color={color}
                        size={size}
                    />
                ))}
            </div>
            <p style={textStyle}>
                {massages.length === maxRating
                    ? massages[tempRating ? tempRating - 1 : rating - 1]
                    : !tempRating
                    ? rating || ''
                    : tempRating || ''}
            </p>
        </div>
    )
}

export const Star = ({
    onRate,
    full,
    onMouseOver,
    clearTempRating,
    color,
    size,
}: {
    onRate: any
    full: boolean
    onMouseOver: any
    clearTempRating: any
    color: string
    size: number
}) => {
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        display: 'block',
        cursor: 'pointer',
        color,
    }
    return (
        <span
            style={starStyle}
            onClick={onRate}
            onMouseOver={onMouseOver}
            onMouseLeave={clearTempRating}
        >
            {full ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={color}
                    stroke={color}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            )}
        </span>
    )
}
/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
export default StarRating
