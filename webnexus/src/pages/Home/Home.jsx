// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ModalCard from '../../components/ModalCard/ModalCard'

import NexusLogoBanner from '../../assets/Logos/nexus_logo_banner.svg'
import './Home.css'
import Blog from '../../components/Blog/Blog'
import AboutContentImage from '../../assets/AboutUs.png'
import Iphone from '../../assets/Iphone12.png'
import IphoneBanner from '../../assets/IphoneBanner.png'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='homepage'>
        <Navbar/>

        <div className='banner-principal-home'>
            <div className="banner-content-text">
                {/* Logo do nexus */}
                <img src={NexusLogoBanner} alt="" />
                <h1>A EVOLUÇÃO DO BANCO<br></br>
                DIGITAL AO SEU ALCANCE</h1>
                <p>Faça como milhares de pessoas e abra uma conta<br></br> nexus agora mesmo</p>

                <button className='btn_banner' onClick={()=> console.log(`olá`)}>CRIAR UMA CONTA AGORA</button>
            </div>
            <div className="banner-mockup">
            <img src={IphoneBanner} alt="" />
            </div>
        </div>
        
        <div className='banner-cartoes' id='banner-cartoes-id'>
            <h1>CONHEÇA NOSSOS CARTÕES</h1>
            <div className='banner-cartoes-modal'>
                <ModalCard/>
            </div>
        </div>

        <div className="banner-aplicatico">
            <h1>CONHEÇA NOSSO APLICATIVO</h1>
            <div className='container-aplicativo'>
                <div className="container-phone">

                    <img src={Iphone} alt="" />
                </div>
                
                <motion.div className="aplicativo-text"
                    initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1, scale:1 }}
                    transition={{duration:0.6}}
                >
                    <h3>Com o nosso aplicativo bancário, você tem o poder de gerenciar suas finanças de forma rápida e descomplicada, tudo na palma da sua mão. </h3>
                    <h3>É a maneira mais conveniente de lidar com seu dinheiro, onde quer que você esteja.</h3>
                </motion.div>
            </div>
        </div>

        <div className="banner-blog">
            <h1>CONHEÇA NOSSO BLOG</h1>
            <h2>No Blog NEXUS, estamos comprometidos em trazer informações diretamente para você.</h2>
            <Blog/>
        </div>

        <div className="sobre-nos">
            <h1>QUEM SOMOS?</h1>
            <motion.div
                initial={{ opacity: 0, scale:0.5 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{duration:0.6}}
                className="container-about-us"
            >
                <div className="content-about-us-1">
                    <p>No NEXUS Bank, acreditamos que a transparência é a base da confiança. Comprometemo-nos a fornecer soluções bancárias acessíveis e seguras, respaldadas por uma equipe dedicada que valoriza a excelência no atendimento ao cliente.</p>
                    <p>Com uma abordagem centrada nas pessoas, buscamos simplificar o universo financeiro, tornando cada interação bancária intuitiva e eficiente. Explore as possibilidades conosco e descubra um novo padrão em serviços bancários, onde seu futuro financeiro encontra-se no centro de tudo que fazemos.</p>
                    <h3 style={{color:'#92AAFF'}}>Bem-vindo ao NEXUS Bank, onde sua jornada financeira é nossa prioridade.</h3>
                </div>

                <div className="content-about-us-2">
                    <div className="teste-redondo">
                        <img src={AboutContentImage} alt="" style={{width: 350, height:350}}/>
                    </div>  
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home