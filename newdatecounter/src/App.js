import './App.css'
import { useReducer } from 'react'

const initialState = { count: 0, step: 1 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'dec':
            return { ...state, count: state.count - state.step }
        case 'inc':
            return { ...state, count: state.count + state.step }
        case 'setCount':
            return { ...state, count: action.playload }
        case 'setStep':
            return { ...state, step: action.payload }
        case 'reset':
            return initialState
        default:
            throw new Error('Oyy error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { count, step } = state

    const date = new Date('june 21 2027')
    date.setDate(date.getDate() + count)

    const dec = function () {
        dispatch({ type: 'dec' })
    }

    const inc = function () {
        dispatch({ type: 'inc' })
    }

    const defineCount = function (event) {
        dispatch({ type: 'setCount', playload: +event.target.value })
    }

    const defineStep = function (event) {
        dispatch({ type: 'setStep', payload: +event.target.value })
    }

    const reset = function () {
        dispatch({ type: 'reset' })
    }

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default App
