import React, { useState , useEffect} from "react"

export const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

let col = hexaColor()

const HexaColor = () => {
  const [style, setStyle] = useState({color: 'white', background: col})

  useEffect(() => {
    setInterval(() => {
      col = hexaColor()
      setStyle({color: 'white', background: col})
    }, 1000)
  }, [])

      return (
      <div className='hexa' style={style}>{hexaColor()}</div>
      )
  }

export default HexaColor

