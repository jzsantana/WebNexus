import React from 'react'
import './Blog.css'

import BlogContent from '../../assets/blogContent.jpg'

const Blog = () => {
  return (
    <div className='container-blog'>
        <div className='container-blog-1'>
            <div style={{display: 'flex', width:'100'}}>
                <div className='separator'/>
                <span>27/11/2023</span>
            </div>

            <div className='container-blog-2'>
                <h1>NEXUS BANK GANHA <br></br>PREMIAÇÃO DE<br></br> MELHOR CARTÃO DE <br></br>DÉBITO INTERNACIONAL</h1>
            </div>

            <p>CONTINUAR LENDO</p>
            <div className='separator-2'></div>
        </div>

        <div className="image-div-blog">
            <img src={BlogContent} alt="" />
        </div>
    </div>
  )
}

export default Blog