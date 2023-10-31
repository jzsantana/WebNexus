import React from 'react'
import './Navbar.css'
import NexusLogo from '../assets/NEXUSlogo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={NexusLogo} alt="" />

        <div className='nav-list'>
            <a href="">CARTÕES</a>
            <a href="">APLICATIVO</a>
            <a href="">BLOG</a>
            <a href="">SOBRE NÓS</a>
        </div>

        <div className='container-botoes-nav'>
                <button className='btn-sign-in'>ENTRAR</button>
                <button className='btn-sign-up'>CADASTRAR</button>
        </div>
    </div>
  )
}

export default Navbar