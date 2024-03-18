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
    const [firstTip, setFirstTip] = useState(0)
    const [twoTip, setTwoTip] = useState(0)

    const changeContent = ({
        data,
        index,
    }: {
        data: any
        index: any
    }) => {
        if (index === 0) setFirstTip(data)
        if (index === 1) setTwoTip(data)
    }

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
                    index={index}
                    changeContent={changeContent}
                    firstTip={firstTip}
                    twoTip={twoTip}
                >
                    {item}
                </ContainerLevelTip>
            ))}
            {check > 0 && (
                <TipCalculation
                    check={check}
                    firstTip={firstTip}
                    twoTip={twoTip}
                />
            )}
            <ResetButton
                setCheck={setCheck}
                changeContent={changeContent}
            >
                Button Of Reset
            </ResetButton>
        </div>
    )
}

export default App
