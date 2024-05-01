import { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Main from './Main'

function App() {
    useEffect('http://localhost:8000/questions').then((response)
 => response.json)
    return (
        <div className="App">
            <Header />
            <Main>
                <p>1/15</p>
                 <p>QUESTION</p>
            </Main>

        </div>
    )
}

export default App
