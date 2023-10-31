import React, { useState } from 'react'
import './Card.css'

const Card = () => {

    const [listaCartoes] = useState([
        {
            id: 1,
            title: "CARTAO DE CREDITO",
            text: `O Cartão de Crédito Platinum Nexus é mais do que um simples cartão; 
                é o símbolo da sua jornada para um estilo de vida financeiro elevado. 
                Com uma gama de benefícios exclusivos e serviços premium, este cartão 
                oferece uma experiência que transcende o comum e abraça o extraordinário.`
        },
        {
            id: 2,
            title: "CARTAO DE CREDITO",
            text: `O Cartão de Débito Nexus oferece acesso direto à sua conta bancária, 
                permitindo pagamentos e saques fáceis. Controle seus gastos sem dívidas 
                ou juros`
        },
    ])
  return (
        <>
            {listaCartoes.map((cardcartao) => (
            <div className='card-cartao' key={cardcartao.id}>
                <div className='cartao-demostrativo'></div>

                <h2>{cardcartao.title}</h2>
                <p>{cardcartao.text}</p>
            </div>
            ))}
        </>
  )
}

export default Card