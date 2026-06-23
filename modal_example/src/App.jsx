import React,{useState} from 'react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const App = () => {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  function open(){
    setShowSignup(true)
  }
  function openLogin(){
    setShowLogin(true)
  }

  return (
    <>
      <h1>Welcome to Our website</h1>
      <button onClick={open}>signup</button>
      <button onClick={openLogin}>Login</button>
      {showSignup && <Signup setShowSignup={setShowSignup}/>}
      {showLogin && <Login setShowLogin={setShowLogin}/>}
    </>
  );
}
export default App;