import React from 'react'
import './UserPage.css'
import NexusLogo from '../../assets/Logos/NEXUSlogo.svg'

const UserPage = () => {
  return (
    <>
        <div className="navbar-userpage">
            <img src={NexusLogo} alt="Logo do banco Nexus" />
        </div>

        <div className="container-principal-userpage">
          <div className="card-user-information">
            <p>Olá, Júlia. Bem vinda(o) de volta!</p>

            <div className="cartao-userpage">
              


            </div>

            
          </div>
          
        </div>
    </>
  )
}

export default UserPage