import React from 'react'
import './Footer.css'
import foot from '../../assets/foot.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    
        <div className='footer'>
        <div className='foot-top'>
          <div className='ft-left'>
            <div><Link to='/'>FACEBOOK</Link><br /><Link to='/'>INSTAGRAM</Link><br /><Link to='/'>LIKNEDIN</Link><br /><Link to='/'>GITHUB</Link></div>
            <div><Link to='/'>ABOUT US</Link><br /><Link to='/team'>OUR TEAM</Link><br /><Link to='/games'>GAMES</Link><br /><Link to='/'>TECH STACK</Link></div>
          </div>
          <div className='ft-right'><span>MADE BY METABOYS</span><br /><span>POWERED BY OVER ENGINEERED</span><br /><span>990 PVT LIMITED</span></div>
          
        </div>
        <div className='foot-bot'>
            <img src={foot} alt="" />
        {/* <p>METABET</p>
            <div className='foot-logo'><img src="" alt="" /></div> */}
        </div>
      </div>
    
  )
}

export default Footer
