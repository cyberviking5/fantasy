import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Team.css'
import aviral from '../../assets/aviral.png'
import kudnar from '../../assets/kudnar.png'
import mayank from '../../assets/mayank.png'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaBitcoin
} from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'

const Team = () => {
  return (
    <div>
       <Navbar/>
       <div className='team-head'>
          <div className='th-main'><FaBitcoin size={140}/>OUR TEAM</div>
          <div className='th-p'>
            <p><span>MEATBET</span> is fueled by a dedicated team of blockchain enthusiasts,
               developers, designers, and industry experts. 
              With a shared passion for innovation, we've come together to
               create an unforgettable experience for fantasy enthusiasts.</p>
          </div>
       </div>

       <div className='team-card'>
          <div className='team-man'>
            <div className='team-img' id='av'><img src={aviral} alt="" /></div>
            <div className='tb'>
              <div className='social-img'><FaInstagram size={40}/><FaFacebook size={40}/><FaGithub size={40}/></div>
              <h1>AVIRAL HATWAL</h1>
              <span>BlockChain Enthusiast</span>
              <p>We as a team are very responsible and clear with our vision. Our mission, purpose, goals and values involved the creation of our vision. </p>
            </div>
          </div>
          <div className='team-man'>
            <div className='team-img' id='kd'><img src={kudnar} alt="" /></div>
            <div className='tb'>
              <div className='social-img'><FaInstagram size={40}/><FaFacebook size={40}/><FaGithub size={40}/></div>
              <h1>YASH KUDNAR</h1>
              <span>BlockChain Enthusiast</span>
              <p>We as a team are very responsible and clear with our vision. Our mission, purpose, goals and values involved the creation of our vision. </p>
            </div>
          </div>
          <div className='team-man'>
            <div className='team-img' id='mr'><img src={mayank} alt="" /></div>
            <div className='tb'>
              <div className='social-img'><FaInstagram size={40}/><FaFacebook size={40}/><FaGithub size={40}/></div>
              <h1>MAYANK RAWAT</h1>
              <span>FRONTEND DEVELOPER</span>
              <p>We as a team are very responsible and clear with our vision. Our mission, purpose, goals and values involved the creation of our vision. </p>
            </div>
          </div>
       </div>

       <Footer />
    </div>
  )
}

export default Team
