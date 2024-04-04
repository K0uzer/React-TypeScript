import React, { useEffect, useState } from 'react'
import './App.css'

const OUTPUT = 'OutPut'
const STARTCURRENCY = 'USD'

function App() {
    const [count, setCount] = useState(0)
    const [outPut, setOutPut] = useState(0)
    const [fromCur, setFromCur] = useState('EUR')
    const [toCur, setToCur] = useState('USD')
    const [isLoading, setIsLoading] = useState(false)
    const controller = new AbortController()
    useEffect(() => {
        const getDataFromApi = async () => {
            try {
                setIsLoading((isLoading) => !isLoading)
                const rest = await fetch(
                    `https://api.frankfurter.app/latest?amount=${count}&from=${fromCur}&to=${toCur}`,
                    { signal: controller.signal },
                )
                    .then((data) => data.json())
                    .then((data) => setOutPut(data.rates[toCur]))

                setIsLoading((isLoading) => !isLoading)
            } catch (err) {
                console.log(err)
            } finally {
                console.log('finally')
            }
        }

        if (!count) return
        if (toCur === fromCur) return

        getDataFromApi()
    }, [count, fromCur, toCur])

    const getCountCurrency = (element: any) => {
        setCount(+element.target.value)
        console.log(count)
    }

    return (
        <div className="App">
            <input type="text" onChange={(e) => getCountCurrency(e)} />
            <select
                value={fromCur}
                onChange={(e) => setFromCur(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={toCur}
                onChange={(e) => setToCur(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>
                {isLoading && <p>Загрузка...</p>}
                {!isLoading && count ? `${outPut} ${toCur}` : ''}
                {!isLoading && !count && `Введите количество ${toCur}`}
            </p>
        </div>
    )
}

export default App
