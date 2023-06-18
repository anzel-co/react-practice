import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const h1 = <h1>BE UPDATED</h1>
const p = <p>Sign up with your name and email address to latest receive news and updates</p>
const form = (
  <div className='form'>
  <input id='firstname' placeholder='First Name'></input>
  <input id='lastname' placeholder='Last Name'></input>
  <input id='email' placeholder='Email'></input>
  <button>SUBSCRIBE</button>
  </div>
)

const app = (
  <div className='app'>
    {h1}
    {p}
    {form}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)

//ReactDOM.render(app, root)
let f = document.getElementsByClassName('form')
console.log(root)
console.log(h1)
console.log(p)
console.log(f)
console.log(app)