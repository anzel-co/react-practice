import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./component/Nav.js"
import Home from "./pages/Home.js"
import Link2 from "./pages/Link2.js"
import Link3 from "./pages/Link3.js"

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}/>
            <Route path='/link2' element={<Link2 />}/>
            <Route path='/link3' element={<Link3 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
  }

export default App