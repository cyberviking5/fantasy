import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import {BsArrowUpRight , FiArrowUpRight} from 'react-icons/fi';

const Home = () => {
  return (
    <>
        <div className="home  h-[100vh]">
              <Navbar/>
              <div className='landing-page'>
              <div className='main'>
                <div className='hero'>
                  <div className='hero-heading'>NOW BET <br />ONLINE IN A MORE SECURE <br />WAY WITH <span>ME</span> US</div>
                  <div className='hero-buttons'><button>Try Now</button><button>Try Now</button></div>
                </div>
                <div className='main-lastline'>YOUR GATEWAY TO A REVOLUTIONARY FANTASY BETTING EXPERIENCE.
                 WE'RE ON A MISSION TO TRANSFORM THE WAY
                 YOU ENGAGE WITH SPORTS AND ENTERTAINMENT</div>
              </div>
        </div>
        </div>
    </>
  )
}

export default Home
