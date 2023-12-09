import { FaLock, FaUserLarge} from 'react-icons/fa6'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
import './Login.css'
import {useNavigate } from 'react-router-dom'
// import { useUser } from '../../service/reducers/AxiosInstance'
// import { useEffect, useState } from 'react'
import { NexusAPI } from '../../service/api/NexusAPI'
import { useState } from 'react'
import { useAuth } from '../../service/reducers/AxiosInstance'


const Login = () => {

    // const {state, dispatch} = useUser();
  const nav = useNavigate()

  console.log();
  console.log();

    const { login } = useAuth();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await NexusAPI.post('auth/token/login', {
        cpf: cpf,
        password: password,
      });

      const { auth_token } = response.data;
      login(auth_token);
      nav('/userpage')
    } catch (error) {
      console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
    }
  };
  
      
  return (
    <div className='login'>
        {/* <Navbar/> */}
        <div className="container-principal-login">
            <div className='modal-login'>
                <div className='image-div-login'>
                    <h1>Bem-vindo <br></br>de volta!</h1>
                </div>
                
                <form onSubmit={handleSubmit} className='login-info-div'>
                    <div className='login-div-logo'>
                        <img src={Logo} alt="" />
                    </div>
                    
                    <div className='div-input'>
                        <span><FaUserLarge color='#7088DD' size={24}/></span>
                        <input 
                            type="text" 
                            placeholder='Insira o número do seu CPF'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            />
                    </div>
                    <div className='div-input'>
                        <span><FaLock color='#7088DD' size={24}/></span>
                        <input 
                            type="password"
                            placeholder='Insira sua senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='forgot-password'>Esqueceu a senha?</p>
                    {/* <Link> */}
                        <button 
                            className="btn-info-login"
                            type='submit'
                            >LOGIN</button>
                    {/* </Link> */}
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login