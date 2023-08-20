import React from 'react'
import bijuli from '../../../assets/bijuli.mp4'
import './Ig.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Ig = () => {
  return (
    <motion.div className='ig'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}  
    >
      <div className='igvid'><video autoPlay loop muted src={bijuli}></video></div>
      <div className='igg'><Link to='/'>  
      
      <button className='metabutti'>METABET</button></Link>
      
        <p className='igp'>SORRY NO LINKS ARE AVAILABLE AS OF NOW.</p>
      </div>
    </motion.div>
  )
}

export default Ig
