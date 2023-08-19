import React from 'react'
import humpe from '../../../assets/humpe.mp4'
import './Fb.css'
import {Link} from 'react-router-dom'

const Fb = () => {
  return (
    <div className='fb'>
      <div className='fbvid'><video autoPlay loop muted src={humpe}></video></div>
      <div className='fbb'>
        <Link to='/'><button className='metabuttf'>METABET</button></Link>
      
        <p className='fbp'>SORRY NO LINKS ARE AVAILABLE AS OF NOW.</p>
      </div>
    </div>
  )
}

export default Fb
