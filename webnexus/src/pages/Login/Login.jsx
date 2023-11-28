import React from 'react'
import { FaBuildingUser, FaUserLarge, FaEyeSlash} from 'react-icons/fa6'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
import './Login.css'
import UserPage from '../UserPage/UserPage'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login'>
        {/* <Navbar/> */}
        <div className="container-principal-login">
            <div className='modal-login'>
                <div className='image-div-login'>
                    <h1>Bem-vindo <br></br>de volta!</h1>
                </div>
                
                <div className='login-info-div'>
                    <div className='login-div-logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='div-input'>
                        <span><FaBuildingUser color='#7088DD' size={24}/></span>
                        <input type="text" placeholder='Insira o número de sua agência' />
                    </div>
                    <div className='div-input'>
                        <span><FaUserLarge color='#7088DD' size={24}/></span>
                        <input type="text" placeholder='Insira o número de sua conta'/>
                    </div>
                    <div className='div-input'>
                        <span><FaEyeSlash color='#7088DD' size={24}/></span>
                        <input type="password" placeholder='Insira sua senha'/>
                    </div>
                    <p className='forgot-password'>Esqueceu a senha?</p>
                    <Link to={"/userpage"}>
                        <button className="btn-info-login">LOGIN</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login