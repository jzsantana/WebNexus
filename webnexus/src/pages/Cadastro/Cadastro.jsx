import './Cadastro.css'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
import InputMask from 'react-input-mask';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import apiCep from '../../service/apicep';


// import apiCep from '../../service/apicep.jsx';
const Cadastro = () => {

    // CALENDARIO
    const [selectedDate, setSelectDate] = useState(null)
  

    const [inputCep, setInputCep] = useState('')
    const [cep, setCep] = useState({})
    // const [cepUser, setCepUser] = useState({})

    async function handleSearch(){
        if (inputCep === ''){
            alert('Preencha um CEP')
            return
        }
        
        try{
            const responseCEP = await apiCep.get(`${inputCep}/json`)
            setCep(responseCEP.data)
            setInputCep("")
        }catch{
            alert('Erro ao buscar o CEP, tente novvamente.')
            setInputCep("")
        }
        
    }

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
                        <input 
                            type="text" 
                            mask={'999.999.999-99'}
                            
                            />
                        <span >CPF</span>
                    </div>

                    <div className="input-email">
                        <input type="text" />
                        <span>Email</span>
                    </div>

                    <div className="input-nascimento">
                        <ReactDatePicker
                            selected={selectedDate}
                            onChange={date => setSelectDate(date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                        {/* <span>Data de nascimento</span> */}
                    </div>

                    <div className="div-endereco-info">
                        <div className="input-cep">
                            <InputMask
                                mask={'99999-999'}
                                type="text" 
                                value={inputCep}
                                onChange={(e) => setInputCep(e.target.value)}
                            />
                            <span onClick={handleSearch}><FaSearch color='#7088DD' size={20}/></span>
                        </div>

                        <div className="input-cidade">
                            <input type='text'>{cep.cidade}</input>
                            <span>Cidade</span>
                        </div>
                    </div>
                        

                    <div className="input-estado">
                        <input type="text" >{cep.uf}</input>
                        <span>Estado</span>
                    </div>

                    <div className="input-endereco">
                        <input type="text" >{cep.logradouro}</input>
                        <span>Endereço</span>
                    </div>

                    <div className="input-bairro">
                        <input type="text" >{cep.bairro}</input>
                        <span>Bairro</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cadastro