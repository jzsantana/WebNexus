import React from 'react'
import './Navbar.css'
import NexusLogo from '../../assets/Logos/NEXUSlogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={NexusLogo} alt="" />

        <div className='nav-list'>
            <a href="#banner-cartoes-id">CARTÕES</a>
            <a href="">APLICATIVO</a>
            <a href="">BLOG</a>
            <a href="">SOBRE NÓS</a>
        </div>

        <div className='container-botoes-nav'>
              <Link to='/login'><button className='btn-sign-in'>ENTRAR</button></Link>
              {/* <Link to='/cadastro'><button className='btn-sign-up'>CADASTRAR</button></Link> */}
        </div>
    </div>
  )
}

export default Navbar