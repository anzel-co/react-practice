import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
let col = hexaColor()
const hexaStyle = {
  color: 'white',
  background: col
}
const HexaColor = () => <div className='hexa' style={hexaStyle}>{hexaColor()}</div>

const H1 = ({header}) => <h1>{header}</h1>
const P = ({text}) => <p>{text}</p>
const Form = ({
  formData: {
    firstnamePlaceholder,
    lastnamePlaceholder,
    emailPlaceholder,
    buttonText
  }
}) => (
  <div className='form'>
  <input id='firstname' placeholder={firstnamePlaceholder}></input>
  <input id='lastname' placeholder={lastnamePlaceholder}></input>
  <input id='email' placeholder={emailPlaceholder}></input>
  <button>{buttonText}</button>
  </div>
)

const App = () => {
  const header = 'Be Updated'
  const text = 'Sign up with your name and email address to latest receive news and updates'
  const formData = {
    firstnamePlaceholder: 'First Name',
    lastnamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    buttonText: 'SUBSCRIBE'
  }
  return (
  <div className='app'>
    <div className='hexa'>
      <HexaColor />
    </div>
    <div className='subscription'>
      <H1 header={header}/>
      <P text={text}/>
      <Form formData={formData}/>
    </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)