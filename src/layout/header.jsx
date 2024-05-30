import React from 'react'
import Logo from'../assets/Book store logo.png'
const Header = () => {
  return (
    <header>
    <div className="logo">
      <img src={Logo} alt="Book logo" width="185px" height="50px" />
    </div>
    <div className="nav-links">
      <ul>
        <li><a href>Home</a></li>
        <li><a href>About us</a></li>
        <li><a href>Courses</a></li>
        <li><a href>Our Services</a></li>
        <li><a href>Contact us</a></li>
        <li className="btn-signin"><a href>Sign in</a></li>
      </ul>
    </div>
  </header>
  )
}

export default Header