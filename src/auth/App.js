import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../mainPage/header'
import Login from './login'
import SignUp from './signup'
const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      { location.pathname==="/" && <Login/> }
      { location.pathname==="/signup" && <SignUp/> }
    </div>
  )
}

export default App
