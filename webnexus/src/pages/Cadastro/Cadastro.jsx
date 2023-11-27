import React, { useState } from 'react'
import './Cadastro.css'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
import InputMask from 'react-input-mask';
import { FaSearch } from "react-icons/fa";


// import apiCep from '../../service/apicep.jsx';
const Cadastro = () => {

    const [inputCep, setInputCep] = useState('')
    const [cepUser, setCepUser] = useState({})

    
    async function handleSearch(event){
        const apiCep = `https://viacep.com.br/ws/${inputCep}/json`

        if(event.key === "Enter"){
            console.log(event.key)
            console.log(inputCep);

            try{
                const response = await apiCep.
                setCepUser(response.data)
                setInputCep("")
            }
            catch{
                console.log(inputCep)
                console.log("Oops... não conseguimos encontrar este cep");
                setInputCep("")
            }
        }
    }

       

        // if (e.key === 'Enter') {

        //     console.log(inputCep);
        //     try{
        //         const response = await apiCep.get(`${inputCep}/json`)
        //         console.log(response.data);

        //    }
        //     catch{
        //         console.log("oops... não conseguimos encontrar esse CEP")
        //     }
        // }


  return (
    <div className="cadastro">
        <div className="container-principal-cadastro">
            <div className="modal-cadastro">
                <div className="image-div-cad">
                    <h1>Junte-se ao<br></br> NEXUS Bank</h1>
                </div>
                <div className="cadastro-info-div">
                    <div className="cad-div-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="input-nome">
                        <input type="text" placeholder='Nome completo'/>
                        <span>Nome completo</span>
                    </div>

                    <div className="input-cpf">
                        <InputMask 
                            type="text" 
                            mask={'999.999.999-99'}
                            
                            />
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
                            <InputMask
                                // mask={'99999-999'}
                                type="text" 
                                value={inputCep} 
                                onChange={(e) => setInputCep(e.target.value)}
                            />
                            <span onClick={handleSearch}><FaSearch color='#7088DD' size={20}/></span>
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