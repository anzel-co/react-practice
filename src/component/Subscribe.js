import React, { useState } from "react"

const text = 'Sign up with your name and email address to latest receive news and updates'
const firstnamePlaceholder = 'First Name'
const lastnamePlaceholder = 'Last Name'
const emailPlaceholder = 'Email'
const buttonText = 'SUBSCRIBE'

const Subscribe = () => {
    const [header, setHeader] = useState('Be Updated')
    const [position, setPosition] = useState({transform: 'translate(0%, 0%)'})
    const [score, setScore] = useState(0)

    const handleMouseEnter = () => {
        let x = Math.round((Math.random() * -450) + 250)
        let y = Math.round((Math.random() * -450) + 150)
        setPosition({transform: `translate(${x}%, ${y}%)`})
    }

    const handleClick = () => {
        let x = Math.round((Math.random() * -450) + 250)
        let y = Math.round((Math.random() * -450) + 150)
        setPosition({transform: `translate(${x}%, ${y}%)`})
        setScore(score + 1)
        if (score === 0) alert('Nice! You scored a point.')
        setHeader('Score: ' + (score + 1))
    }

    return (
    <>
    <h1>{header}</h1>
    <p>{text}</p>
    <div className='form'>
      <input className='personalInfo' placeholder={firstnamePlaceholder}></input>
      <input className='personalInfo' placeholder={lastnamePlaceholder}></input>
      <input className='personalInfo' placeholder={emailPlaceholder}></input>
      <button className='sub' onMouseEnter={handleMouseEnter} onClick={handleClick} style={position}>{buttonText}</button>
    </div>
    </>
)}

export default Subscribe