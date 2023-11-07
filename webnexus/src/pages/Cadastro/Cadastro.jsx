import React from 'react'
import './Cadastro.css'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'

const Cadastro = () => {
  return (
    <div className="cadastro">
        <div className="container-principal-cadastro">
            <div className="modal-cadastro">
                <div className="image-div-cad"></div>
                <div className="cadastro-info-div">
                    <div className="cad-div-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="input-nome">
                        <input type="text" />
                        <span>Nome completo</span>
                    </div>

                    <div className="input-cpf">
                        <input type="text" />
                        <span>CPF</span>
                    </div>

                    <div className="input-email">
                        <input type="text" />
                        <span>Email</span>
                    </div>

                    <div className="input-nascimento">

                        <span>Data de nascimento</span>
                    </div>

                    <div className="div-endereco-info">
                        <div className="input-cep">
                            <input type="text" />
                            <span>CEP</span>
                        </div>

                        <div className="input-cidade">
                            <input type="text" />
                            <span>Cidade</span>
                        </div>
                    </div>
                        

                    <div className="input-estado">
                        <input type="text" />
                        <span>Estado</span>
                    </div>

                    <div className="input-endereco">
                        <input type="text" />
                        <span>Endereço</span>
                    </div>

                    <div className="input-bairro">
                        <input type="text" />
                        <span>Bairro</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cadastro