import './UserPage.css'
import NexusLogo from '../../assets/Logos/NEXUSlogo.svg'
import { FaRegEye } from "react-icons/fa";
import { useAuth } from '../../service/reducers/AxiosInstance';
import { useEffect, useState } from 'react';
import { NexusAPI } from '../../service/api/NexusAPI';


const UserPage = () => {
  const { authToken } = useAuth();
  const [userName, setUserName] = useState('');
  const [saldo, setsaldo] = useState('');
  const [numberAccount, setNumberAccount] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authToken) {
          NexusAPI.defaults.headers.Authorization = `Token ${authToken}`;

          // Endpoint para obter o nome do cliente
          const userResponse = await NexusAPI.get('auth/users/me/');
          const userId = userResponse.data.id
          setUserName(userResponse.data.name);

          const accountResponse = await NexusAPI.get(`api/v1/account/${userId}/`);
          setNumberAccount(accountResponse.data.account_number)
          setsaldo(accountResponse.data.saldo);
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, [authToken]);
  return (
    <>
        <div className="navbar-userpage">
            <img src={NexusLogo} alt="Logo do banco Nexus" />
        </div>

        <div className="container-principal-userpage">
          <div className="card-user-information">
            <p>Olá, {userName}. Bem vinda(o) de volta!</p>

            <div className="cartao-userpage">
            
              <div className='cartao-info-1'>
                <p>Agencia <span style={{marginLeft: '3px', fontSize: '15px', color: '#fff', fontWeight: 500}}>0001</span></p>
                <p>Conta <span style={{marginLeft: '3px', fontSize: '15px', color: '#fff'}}>{numberAccount}</span></p>
              </div>
              
              
              <div className='cartao-info-2'>
                <p>Saldo</p>
                <p>R$ </p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                  <p>{saldo}</p>
                  <button className='btn-eye-user-page'><FaRegEye color='white' size={20}/></button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default UserPage