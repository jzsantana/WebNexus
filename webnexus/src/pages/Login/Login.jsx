import { FaLock, FaUserLarge} from 'react-icons/fa6'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
import './Login.css'
import { Link } from 'react-router-dom'
import { useUser } from '../../service/reducers/AxiosInstance'
import { useEffect, useState } from 'react'
import { NexusAPI } from '../../service/reducers/NexusAPI'


const Login = () => {

    const [state, dispatch] = useUser()

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() =>{
        console.log(state.token);
    }, [state.token])

    const loginUser = async (event) => {
        event.preventDefault();
      
        try {
          const login = await NexusAPI.post(
            `auth/users/`,
            {
              cpf: cpf,
              password: password,
            },
            {
              headers: {
                'Authorization': `Token 1fddfcc014afbdd76f09badada7cc81532c0aea8`,
              },
            }
          );
      
          dispatch({ type: 'SET_TOKEN', payload: login.data.auth_token });
      
        } catch (error) {
          console.error('Erro ao fazer login:', error.response.data);
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
                
                <form onSubmit={loginUser} className='login-info-div'>
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
                    <Link to={"/userpage"}>
                        <button 
                            className="btn-info-login"
                            type='submit'
                            >LOGIN</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login