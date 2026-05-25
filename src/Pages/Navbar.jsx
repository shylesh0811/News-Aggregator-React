import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const auth = sessionStorage.getItem("token")
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h2>T325 News</h2>
        </div>
        <div className="nav-buttons">
          {
            auth? (
              <div>Hello Bro, </div>
            ) : <div> <Link to="/login">  <button className="login">Login</button> </Link>
            <Link to="/signup">  <button className="signup">Sign up</button> </Link> </div>
          }
          </div>
      </nav>
    </header>
  )
}

export default Navbar;