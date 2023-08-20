import React from 'react'
import humpe from '../../../assets/humpe.mp4'
import './Fb.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Fb = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    className='fb'>
      <div className='fbvid'><video autoPlay loop muted src={humpe}></video></div>
      <div className='fbb'>
        <Link to='/'><button className='metabuttf'>METABET</button></Link>
      
        <p className='fbp'>SORRY NO LINKS ARE AVAILABLE AS OF NOW.</p>
      </div>
    </motion.div>
  )
}

export default Fb
