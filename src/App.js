import React, { useState  } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Auth from "./pages/Auth.js"
import Nav from "./component/Nav.js"
import Home from "./pages/Home.js"
import Link2 from "./pages/Link2.js"
import Link3 from "./pages/Link3.js"
import Error404 from "./pages/Error404.js"
import AuthContext from "./context/AuthContext.js"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  console.log(isLoggedIn)

  const loggedIn = localStorage.getItem('authenticated')

  const login = () => {
    setIsLoggedIn(true)
    localStorage.setItem('authenticated', true)
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('authenticated')
  }

  let routes;

  if (loggedIn) {
    routes = (
      <>
        <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />}/>
          <Route path='link2'  element={<Link2 />}/>
        </Route>
        <Route path='/link3' element={<Link3 />}/>
        <Route path='/*' element={<Error404 />}/>
        </Routes>
      </>
    )
  } else {
    routes = (
      <>
        <Routes>
            <Route path='/auth' element={<Auth />}/>
            <Route path='*' element={<Navigate to='/auth' replace/>}/>
        </Routes>
      </>
      
    )
    
  }

  return (
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
        <BrowserRouter>
          
            {routes}
         
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }

export default App