import React from "react"
import ReactDOM from "react-dom"
import './mapping.css'

const App = () => {
    return (
        <div className='container'>
            <div>
                <h1>Numbers List</h1>
                {[1, 2, 3, 4, 5]}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)