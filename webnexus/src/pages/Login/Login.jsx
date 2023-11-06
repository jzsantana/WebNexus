import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import { FaBuildingUser, FaUserLarge, FaEyeSlash} from 'react-icons/fa6'

import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <Navbar/>

        <div className="container-principal-login">
            <div className='modal-login'>
                <div className='image-div-login'></div>
                
                <div className='login-info-div'>
                    <div className='div-input-agencia'>
                        <span><FaBuildingUser color='#353535' size={25}/></span>
                        <input type="text" />
                    </div>

                    <div className='div-input-conta'>
                        <span><FaUserLarge color='#353535' size={25}/></span>
                        <input type="text" />
                    </div>

                    <div className='div-input-senha'>
                        <span><FaEyeSlash color='#353535' size={25}/></span>
                        <input type="password" />
                    </div>
                    <p className='forgot-password'>Esqueceu a senha?</p>
                    <button className="btn-info-login">LOGIN</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login