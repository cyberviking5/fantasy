import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Games.css'
import Scroller from '../../components/Scroller/Scroller'
import Cric from '../../components/Cricket/Cric'
import Hock from '../../components/Hockey/Hock'
import Foot from '../../components/Football/Foot'
import Footer from '../../components/Footer/Footer'
const Games = () => {
  return (
    <div className='game'>
        <Navbar />
        <div className='games-main'>
          <div className='game-head'>Combining cutting-edge <br /><span>blockchain </span> innovations with <br />the thrill of fantasy gaming.</div>
          <div className='game-para'>We envision a world where users can participate in secure, transparent <br /> and rewarding fantasy betting activities.
             Our platform harnesses the potential of blockchain to <br /> bring you an unparalleled level of trust and excitement. </div>
        </div>

        <Scroller/>

        <Cric/>
        <Foot/>
        <Hock/>

        <Scroller/>
        <Footer/>
        
    </div>
  )
}

export default Games
