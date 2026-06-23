import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Logo</h2>
        </div>
        <div className="right">
          <Link to={"/"}><h2>Home</h2></Link>
          <Link to={"/signup"}><h2>Signup</h2></Link>
          <Link to={"/login"}><h2>Login</h2></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar