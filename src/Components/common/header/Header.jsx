import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Université</Link>
            </li>
            <li>
              <Link to='/courses'>Département</Link>
            </li>
            <li>
              <Link to='/about'>Formations</Link>
            </li>
            <li>
              <Link to='/team'>Espace Etudiant</Link>
            </li>
            <li>
              <Link to='/pricing'>E-Services</Link>
            </li>
            <li>
              <Link to='/journal'>Rayonnement</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>click</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
