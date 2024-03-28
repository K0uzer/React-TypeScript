import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import StarRating from './StarRating'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <App />,
    // <StarRating
    //     maxRating={5}
    //     massages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    //     color="#fcc419"
    //     size={48}
    //     className=""
    //     defaultRating={3}
    //     onSetRating={null}
    // />,
)

reportWebVitals()
