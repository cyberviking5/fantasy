import React from 'react'
import bijuli from '../../../assets/pani.mp4'
import './Ln.css'
import {Link} from 'react-router-dom'

const Ln = () => {
  return (
    <div className='ln'>
      <div className='lnvid'><video autoPlay loop muted src={bijuli}></video></div>
      <div className='lnn'>
        <Link to='/'><button className='metabuttl'>METABET</button></Link>      
        <p className='lnp'>SORRY NO LINKS ARE AVAILABLE AS OF NOW.</p>
      </div>
    </div>
  )
}

export default Ln
