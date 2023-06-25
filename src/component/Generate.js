import React, { useState, useRef } from "react"
import { hexaColor } from "./HexaColor"

const isPrime = (n) => {
    let factor = 0
    for (let i = 1; i <= n; i++) { if (n % i === 0) factor++ }
    return factor === 2 ? true : false
  } 

const Generate = () => {
  const [numbers, setNumbers] = useState([])
  const [colors, setColors] = useState([])
  const [gen, setGen] = useState('')
  const ref = useRef(null)

  const list = []
  const renderNum = () => {
    for(let i = 1; i <= ref.current.value && i <= 999; i++) {
      list.push(i)
    } 
    setNumbers([...list])
    setGen('Nums')
  }
  
  const renderCol = () => {
    for(let i = 1; i <= ref.current.value && i <= 999; i++) {
      list.push(hexaColor())
    }
    setColors([...list])
    setGen('Cols')
  }

  const Num = () => {
    let bgColor
    let Nums = numbers.map((number) => {
      let primeColor = { backgroundColor: '#ff4d4d' }
      let oddColor = { backgroundColor: '#ffff40' }
      let evenColor = { backgroundColor: '#4da64d' }
      if (number % 2 !== 0) bgColor = oddColor
      if (number % 2 === 0) bgColor = evenColor
      if (isPrime(number) === true) bgColor = primeColor
      return (<h3 className='num'key={number} style={bgColor}>{number}</h3>)
    })
    let Cols = colors.map(color => {
      bgColor = { backgroundColor: `${hexaColor()}`}
      return ( <h3 className='col'key={color} style={bgColor}>{color}</h3> )
    })
    return gen === 'Nums' ? Nums : Cols
  }

  return (
    <div className='numberInputs'>
    <input id='numberInput' type='number' ref={ref} placeholder='Enter a number to generate.'></input>
    <button className='gen' onClick={renderNum}>GENERATE NUMBER</button>
    <button className='gen' onClick={renderCol}>GENERATE COLORS</button>
    <div className='NumContainer'>
      <Num />
    </div>
    </div>
  )
}

export default Generate