import React from 'react'
import './Navbar.css'
import NexusLogo from '../../assets/Logos/NEXUSlogo.svg'
import {TfiMenu} from 'react-icons/tfi'
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
              <Link to='/cadastro'><button className='btn-sign-up'>CADASTRAR</button></Link>
        </div>
        {/* menu hamburguer para responsividade */}
        <TfiMenu color='white' size={20} display='none' />
    </div>
  )
}

export default Navbar