import './App.css'

const ContainerLevelTip = ({
    children,
}: {
    children: any
}) => {
    return (
        <div className="container">
            <>{children}</>
            <select>
                <option value="">Dissatisfied (0%)</option>
                <option value="">It was good (10%)</option>
                <option value="">
                    Absolutely amazing (20%)
                </option>
            </select>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div className="container">
                <p>How much was the bill?</p>
                <input type="text" />
            </div>
            <ContainerLevelTip>
                <p>How did you like the service?</p>
            </ContainerLevelTip>
            <ContainerLevelTip>
                <p>How did your friend like the service?</p>
            </ContainerLevelTip>
            <h2 style={{ margin: '20px' }}>
                You pay $105 ($100 + $5 tip)
            </h2>
            <button style={{ margin: '0 0 0 20px' }}>
                Reset
            </button>
        </div>
    )
}

export default App
