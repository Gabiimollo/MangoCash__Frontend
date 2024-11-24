import './Navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={"/"} >
          <img className="navbar-logo" src="./src/assets/Landing/Logo_MangoCash.png" alt="logo-mangocash" />
        </Link>  
      </div>

      <div className="navbar-center">
        <Link to={"/sobre_nosotros"} className='navbar-link'>Sobre nosotros</Link>
        <Link to={"/porque_elegirnos"} className='navbar-link'>Porqué Elegirnos</Link>
        <Link to={"/ayuda"} className='navbar-link'>Ayuda</Link>
      </div>

      <div className="navbar-right">
        <Link to={"/registro"}><button class="button --signup">Registrarse</button></Link>
        <Link to={"/login"}><button class="button --signin">Ingresar</button></Link>
      </div>
    </nav>
    
    
  )
}

export default Navbar