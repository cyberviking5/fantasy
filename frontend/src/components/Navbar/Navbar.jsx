import React from 'react'
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Scroller from '../Scroller/Scroller';
import logo from '../../assets/logo.png';

const Navbar = () => {

  async function connect(){
    try{
    if(window.ethereum!=="undefined")
    {
        await window.ethereum.request({method:"eth_requestAccounts"})
        setcon("CONNECTED")
    }
    }
    catch(e){console.log(e)}
}

  const [nav,setNav] = useState(false)
  const [con,setcon]=useState("CONNECT")

  const handleNav = () => {
      setNav(!nav)
  }


  return (
    <>
    
      
      {nav ?
      
      <div className='opened-nav linear duration-500 ' >
        
      <div className='opened-nav-top'>
        <Link to='/' className='opened-nav-head'><span>METABET</span><img src={logo} alt="" /></Link>
        <div className='opened-nav-close'>
          <div>CLOSE</div>
          <span><AiOutlineClose size={50} onClick={handleNav}/></span>
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
          
          <Link to='/'>ABOUT US</Link>
          <Link to='/team'>OUR TEAM</Link>
          <Link to='/games'>GAMES</Link>
          <Link to='/'>TECH STACK</Link>
      
         
          </div>
        </div>
      </div>

      <div className='opened-nav-bt'>
      <div>POWERED BY OVERENGINEERED</div>
      <div>METABOYS</div>
      <div>METABET © 2023 </div>
    </div>

    </div>

        :

        <div className='navbar linear duration-500'>
        <Link to='/' className='nav-part1'>
            <span className='logoHeading'>METABET</span>
            <img src={logo} alt="" />
        </Link>
        <div className='nav-part2'>
          <div className='nav-part2-main1' >
          <Link to="/games" className='nav-games' >GAMES</Link>
          <Link to='/team' className='nav-team'>OUR TEAM</Link>
          </div>
          <div className='nav-part2-main2'>
          <div className='nav-connect cursor-pointer' onClick={connect}>{con}</div>
          <div className='nav-menu' onClick={handleNav}><div>MENU
            </div>
            <div className='menu-icon-open'>
              <AiOutlineMenu size={20}/>
            </div>
          </div>
          </div>
         
            
        </div>
    </div>
     
    }
        

    </>
  )
}

export default Navbar
