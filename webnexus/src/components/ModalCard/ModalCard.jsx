import './ModalCard.css'
import Chip from '../../assets/chip_cartao.png'

const Card = () => {
  return (
        <>
            <div className='card-cartao'>
                <div className='cartao-demostrativo cd-1'>
                    <div className='div-chip'><img src={Chip} alt="" /></div>
                    <div className='div-card-number'><p>3333 2222 1111 2525</p></div>
                    <div className="div-line-separator"></div>
                    <div  className='div-info-cliente-cartao' >
                        <p>Juliana Baltazar</p>
                        <p>29/10</p>
                    </div>
                </div>
                <h2>CARTAO DE DEBITO</h2>
                <p>O Cartão de Débito Nexus vai além do convencional, proporcionando uma experiência 
                    de transações financeiras simplificada, segura e eficaz, elevando seu padrão de 
                    praticidade e controle </p>
            </div>

            <div className='card-cartao'>
                <div className='cartao-demostrativo cd-2'>
                    <div className='div-chip'><img src={Chip} alt="" /></div>
                    <div className='div-card-number'><p>3333 2222 1111 2525</p></div>
                    <div className="div-line-separator"></div>
                    <div  className='div-info-cliente-cartao' >
                        <p>Juliana Baltazar</p>
                        <p>29/10</p>
                    </div>
                </div>
                <h2>CARTAO DE CREDITO</h2>
                <p>A Conta Poupança Nexus é uma escolha inteligente para quem busca crescimento financeiro. 
                    Com uma taxa de juros competitiva e facilidade de acesso aos seus fundos, esta conta oferece 
                    uma maneira segura e eficiente de poupar para o futuro. </p>
            </div>

            <div className='card-cartao'>
                <div className='cartao-demostrativo cd-3'>
                    <div className='div-chip'><img src={Chip} alt="" /></div>
                    <div className='div-card-number'><p>3333 2222 1111 2525</p></div>
                    <div className="div-line-separator"></div>
                    <div  className='div-info-cliente-cartao' >
                        <p>Juliana Baltazar</p>
                        <p>29/10</p>
                    </div>
                </div>
                <h2>CARTAO DE CREDITO</h2>
                <p>O Cartão de Débito Nexus oferece acesso direto à sua conta bancária, 
                permitindo pagamentos e saques fáceis. Controle seus gastos sem dívidas 
                ou juros</p>
            </div>
        </>
  )
}

export default Card