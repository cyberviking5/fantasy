import React from 'react'
import './Footer.css'
import foot from '../../assets/foot.png'

const Footer = () => {
  return (
    
        <div className='footer'>
        <div className='foot-top'>
          <div className='ft-left'>
            <div><span>FACEBOOK</span><br /><span>INSTAGRAM</span><br /><span>LIKNEDIN</span><br /><span>GITHUB</span></div>
            <div><span>ABOUT US</span><br /><span>OUR TEAM</span><br /><span>GAMES</span><br /><span>TECH STACK</span></div>
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
