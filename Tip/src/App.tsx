import { useState } from 'react'
import './App.css'
import ContainerLevelTip from './Components/ContainerLevelTip'
import TipCalculation from './Components/TipCalculation'
import ContainerPrice from './Components/ContainerPrice'

function App() {
    const [check, setCheck] = useState(0)
    const [arrayTip, setArrayTip] = useState([0, 0])
    return (
        <div className="App">
            <ContainerPrice
                check={check}
                setCheck={setCheck}
            >
                <p>How much was the bill?</p>
            </ContainerPrice>
            <ContainerLevelTip
                arrayTip={arrayTip}
                setArrayTip={setArrayTip}
            >
                <p>How did you like the service?</p>
            </ContainerLevelTip>
            <ContainerLevelTip
                arrayTip={arrayTip}
                setArrayTip={setArrayTip}
            >
                <p>How did your friend like the service?</p>
            </ContainerLevelTip>
            {check > 0 && (
                <TipCalculation
                    check={check}
                    arrayTip={arrayTip}
                />
            )}
        </div>
    )
}

export default App
