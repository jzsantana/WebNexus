import './UserPage.css'
import NexusLogo from '../../assets/Logos/NEXUSlogo.svg'
import { FaRegEye } from "react-icons/fa";
import { UserProvider } from '../../service/reducers/AxiosInstance';

const UserPage = () => {
  return (
    <UserProvider>
        <div className="navbar-userpage">
            <img src={NexusLogo} alt="Logo do banco Nexus" />
        </div>

        <div className="container-principal-userpage">
          <div className="card-user-information">
            <p>Olá, . Bem vinda(o) de volta!</p>

            <div className="cartao-userpage">
              <div className='cartao-info-1'>
                <p>Agencia <span style={{marginLeft: '3px', fontSize: '15px', color: '#fff', fontWeight: 500}}>0001</span></p>
                <p>Conta <span style={{marginLeft: '3px', fontSize: '15px', color: '#fff'}}>123456</span></p>
              </div>
              
              <div className='cartao-info-2'>
                <p>Saldo</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                  <p>R$</p>
                  <p>1000.00</p>
                  <button className='btn-eye-user-page'><FaRegEye color='white' size={20}/></button>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
    </UserProvider>
  )
}

export default UserPage