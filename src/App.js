import React from "react"
import Generate from "./component/Generate.js"
import HexaColor from "./component/HexaColor.js"
import Subscribe from "./component/Subscribe.js"

const App = () => {
  return (
    <div className='app'>
      <div className='generate'>
        <Generate />
      </div>
      <div className='hexa'>
        <HexaColor />
      </div>
      <div className='subscription'>
        <Subscribe/>
      </div>
      </div>
    )
  }

export default App