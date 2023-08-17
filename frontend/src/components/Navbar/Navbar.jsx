import React from 'react'
import { useState } from 'react';
import logo from '../../assets/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css';
import Scroller from '../Scroller/Scroller';

const Navbar = () => {

  const [nav,setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }


  return (
    <>
        {/* <div className='navbar'>
            <div className='nav-part1'>
                <span className='logoHeading'>METABET</span>
                <img src={logo} alt="" />
            </div>
            <div className='nav-part2'>
              <div className='nav-part2-main' >
              <div className='nav-games'>GAMES</div>
              <div className='nav-team'>OUR TEAM</div>
              </div>
              <div className='nav-part2-main'>
              <div className='nav-connect'>CONNECT</div>
              <div className='nav-menu' onClick={handleNav}><div>MENU
                </div>
                <div className='menu-icon-open'>
                  <AiOutlineMenu size={20}/>
                </div>
              </div>
              </div>
             
                
            </div>
        </div> */}

        {/* open navbar */}

        <div className=' opened-nav' >

        
          <div className='opened-nav-top'>
            <div className='opened-nav-head'><span>METABET</span><img src={logo} alt="" /></div>
            <div className='opened-nav-close'>
              <div>CLOSE</div>
              <span><AiOutlineClose size={50}/></span>
            </div>
          </div>

          <Scroller />

          <div className='opened-nav-main'>
            <div className='highlight'>
            BET WITH <span>BLOCKCHAIN</span>
            </div>
            <div className='menu-card'>
              <div className='menu-card-heading'>MENU</div>
              <div className='menu-card-list'>
              <a href="">ABOUT US</a>
              <a href="">OUR TEAM</a>
              <a href="">GAMES</a>
              <a href="">TECH STACK</a>
              </div>
            </div>
          </div>

          <div className='opened-nav-bt'>
          <div>POWERED BY OVERENGINEERED</div>
          <div>METABOYS</div>
          <div>METABET © 2023 </div>
        </div>

        </div>

        

    </>
  )
}

export default Navbar
