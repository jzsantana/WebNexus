import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'

import NexusLogoBanner from '../assets/Logo/nexus_logo_banner.svg'
import './Home.css'

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
                <img src="" alt="" />
            </div>
        </div>
        
        <div className='banner-cartoes'>
            <Card/>
        </div>
    </div>
  )
}

export default Home