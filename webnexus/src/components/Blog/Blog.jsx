import './Blog.css'
import { motion } from 'framer-motion'

import BlogContent from '../../assets/blogContent.jpg'

const Blog = () => {

  return (
    <motion.div className='container-blog'>
        <div className='container-blog-1'>
            <div style={{display: 'flex', width:'100'}}>
                <div className='separator'/>
                <span style={{fontWeight: 600}}>27/11/2023</span>
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
    </motion.div>
  )
}

export default Blog