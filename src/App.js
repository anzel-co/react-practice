import React from "react"
import Generate from "./component/Generate.js"
import HexaColor from "./component/HexaColor.js"
import Subscribe from "./component/Subscribe.js"
import Form from "./component/Form.js"

class App extends React.Component {
    state = {
      numbers: [],
      changePosition: {
        transform: 'translate(0%, 0%)'
      },
      header: 'Be Updated',
      score: 0
    }
    renderNum = () => {
      const numList = this.state.numbers
      numList.splice(0, numList.length)
      for(let i = 1; i <= document.getElementById('numberInput').value && i <= 999; i++) {
        numList.push(i)
      } 
      this.setState({numbers: numList})
    }
    handleMouseEnter = () => {
        let randPosition = () => Math.round((Math.random() * -450) + 250)
        let x = randPosition()
        let y = randPosition()
        this.setState({changePosition: {transform: `translate(${x}%, ${y}%)`}
        })
    }
    handleClick = () => {
        let randPosition = () => Math.round((Math.random() * -450) + 250)
        let x = randPosition()
        let y = randPosition()
        this.setState({changePosition: {transform: `translate(${x}%, ${y}%)`}
        })
        this.setState({score: this.state.score + 1})
        if (this.state.score === 0) alert('Nice! You scored a point.')
        this.setState({header: 'Score: ' + (this.state.score + 1)})
    }
    render() {
      const header = this.state.header 
      const text = 'Sign up with your name and email address to latest receive news and updates'
      const formData = {
        firstnamePlaceholder: 'First Name',
        lastnamePlaceholder: 'Last Name',
        emailPlaceholder: 'Email',
        buttonText: 'SUBSCRIBE'
      }
      return (
      <div className='app'>
        <div className='generate'>
          <Generate renderNum={this.renderNum} numbers={this.state.numbers}/>
        </div>
        <div className='hexa'>
          <HexaColor />
        </div>
        <div className='subscription'>
          <Subscribe header={header} text={text}/>
          <Form formData={formData} handleMouseEnter={this.handleMouseEnter} handleClick={this.handleClick} changePosition={this.state.changePosition}/>
        </div>
      </div>
      )
    }
  }

export default App