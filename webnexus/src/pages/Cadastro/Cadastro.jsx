import './Cadastro.css'
import Logo from '../../assets/Logos/nexus_logo_banner.svg'
// import InputMask from 'react-input-mask';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import apiCep from '../../service/apicep';
import { useForm } from "react-hook-form";

// import apiCep from '../../service/apicep.jsx';
const Cadastro = () => {

    // CALENDARIO
    const [selectedDate, setSelectDate] = useState(null)
    
    const {register, setValue, handleSubmit} = useForm("")
    const [inputCep, setInputCep] = useState('')

    

    async function handleSearch(){
        if (inputCep === ''){
            alert('Preencha um CEP')
            return
        }
     
        console.log(inputCep)
        
        try{
            const responseCEP = await apiCep.get(`${inputCep}/json`)
            console.log(responseCEP)
            setValue('cep', responseCEP.data.cep)
            setValue('cidade', responseCEP.data.localidade)
            setValue('logradouro', responseCEP.data.logradouro)
            setValue('bairro', responseCEP.data.bairro)
            setValue('uf', responseCEP.data.uf)
        }catch{
            alert('Erro ao buscar o CEP, tente novamente.')
            setInputCep("")
        }
    }
    
    function handleClick(){
        handleSearch();
        () => setValue("cep");
    }

     

  return (
    <div className="cadastro">
        <div className="container-principal-cadastro">
            <div className="modal-cadastro">
                <div className="image-div-cad">
                    <h1>Junte-se ao<br></br> NEXUS Bank</h1>
                </div>
              
                <form onSubmit={handleSubmit} className="cadastro-info-div">
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
                            <input
                                type="text" 
                                value={inputCep}
                                {...register('cep')} 
                                onChange={(e) => setInputCep(e.target.value)}
                            />
                            <span onClick={handleClick}><FaSearch color='#7088DD' size={20}/></span>
                        </div>

                        <div className="input-cidade">
                            <input type='text'
                                {...register('cidade')}
                            />
                            <span>Cidade</span>
                        </div>
                    </div>

                    <div className="input-estado">
                        <input 
                            type="text"
                            {...register('uf')}
                         />
                        <span>Estado</span>
                    </div>

                    <div className="input-endereco">
                        <input
                             type="text"
                             {...register('logradouro')}
                             />
                             
                        <span>Endereço</span>
                    </div>

                    <div className="input-bairro">
                        <input 
                            type="text" 
                            {...register('bairro')}
                        />
                        <span>Bairro</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Cadastro