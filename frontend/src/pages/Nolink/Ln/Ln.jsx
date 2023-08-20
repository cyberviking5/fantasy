import React from 'react'
import bijuli from '../../../assets/pani.mp4'
import './Ln.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Ln = () => {
  return (
    <motion.div className='ln'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}  
    >
      <div className='lnvid'><video autoPlay loop muted src={bijuli}></video></div>
      <div className='lnn'>
        <Link to='/'><button className='metabuttl'>METABET</button></Link>      
        <p className='lnp'>SORRY NO LINKS ARE AVAILABLE AS OF NOW.</p>
      </div>
    </motion.div>
  )
}

export default Ln
