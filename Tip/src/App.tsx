import { useState } from 'react'
import './App.css'
import ContainerLevelTip from './Components/ContainerLevelTip'
import TipCalculation from './Components/TipCalculation'
import ContainerPrice from './Components/ContainerPrice'
import ResetButton from './Components/ResetButton'

const childrenContent = [
    <p>How did you like the service?</p>,
    <p>How did your friend like the service?</p>,
]

function App() {
    const [check, setCheck] = useState(0)
    const [arrayTip, setArrayTip] = useState([
        { percent: '0' },
        { percent: '0' },
    ])
    return (
        <div className="App">
            <ContainerPrice
                check={check}
                setCheck={setCheck}
            >
                <p>How much was the bill?</p>
            </ContainerPrice>
            {childrenContent.map((item, index) => (
                <ContainerLevelTip
                    key={index}
                    arrayTip={arrayTip}
                    setArrayTip={setArrayTip}
                    index={index}
                >
                    {item}
                </ContainerLevelTip>
            ))}
            {check > 0 && (
                <TipCalculation
                    check={check}
                    arrayTip={arrayTip}
                />
            )}
            <ResetButton>Button Of Reset</ResetButton>
        </div>
    )
}

export default App
