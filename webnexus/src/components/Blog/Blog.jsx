import React from 'react'
import './Blog.css'

import Aviao from '../../assets/imagem_aviao.jpg'

const Blog = () => {
  return (
    <div className='container-blog'>
        <div className='container-blog-1'>
            <div style={{display: 'flex', width:'100'}}>
                <div className='separator'/>
                <span>27/11/2023</span>
            </div>

            <div className='container-blog-2'>
                <h1>NEXUS Bank ganha <br></br>premiação de<br></br> Melhor Cartão de <br></br>Débito Internacional</h1>
            </div>

            <p>CONTINUAR LENDO</p>
            <div className='separator-2'></div>
        </div>

        <div className="image-div-blog">
            <img src={Aviao} alt="" />
        </div>
    </div>
  )
}

export default Blog