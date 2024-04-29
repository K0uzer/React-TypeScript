// import './App.css'

// function App() {
//     return <div className="App"></div>
// }

// export default App

import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 5 }
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleDecrementDecrease() {
        this.setState((curState) => {
            return { count: curState.count - 1 }
        })
    }

    handleDecrementIncrease() {
        this.setState((curState) => {
            return { count: curState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDecrementDecrease}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrementIncrease}>++</button>
            </div>
        )
    }
}

export default Counter
