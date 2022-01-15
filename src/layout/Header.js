import React from 'react'

function Header() {
  return (
    <nav className='grey darken-2'>
      <div className="nav-wrapper header__nav">
        <a href="#" className="brand-logo">Movie App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Sass</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
