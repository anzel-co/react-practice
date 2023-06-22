import React from "react"

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

class HexaColor extends React.Component {
    state = {
      style: {
        color: 'white',
        background: col
      }
    }
    componentDidMount() {
      setInterval(() => {
        col = hexaColor()
        this.setState({style: {color: 'white', background: col}})
      }, 1000);
    }
    render() {
      return (
      <div className='hexa' style={this.state.style}>{hexaColor()}</div>
      )
    }
  }

export default HexaColor