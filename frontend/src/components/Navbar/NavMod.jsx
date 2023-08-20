import React from 'react'
import ReactDom from 'react-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import win from '../../assets/win.mp4'
import Scroller from "../Scroller/Scroller";
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './NavMod.css'
import {motion} from 'framer-motion'
import Lenis from '@studio-freight/lenis';
// import scrollTo from '@studio-freight/lenis';


const MODAL_STYLES = {
  position: 'fixed',
  width:'100%',
  top:0,
  left:0,
  zIndex:1000,

}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ cur, children, handleNav }) {

  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  // console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

const s1 = () =>{
    return lenis.scrollTo('#second')
}
const s2 = () =>{
  return lenis.scrollTo('#fourth')
}


  return ReactDom.createPortal(
    < >
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <div className="opened-nav linear duration-500 ">
          <div className="opened-nav-top">
            <Link to="/" className="opened-nav-head">
              <img src={logo} alt="" />
              <span>METABET</span>
            </Link>
            <div className="opened-nav-close"  onClick={handleNav}>
              <div>CLOSE</div>
              <span>
                <AiOutlineClose size={50} />
              </span>
            </div>
          </div>

          <Scroller />

          <div className="opened-nav-main">
            <div className="highlight">
              BET WITH <span>BLOCKCHAIN</span>
            </div>
            <div className="menu-card">
              <div className="menu-card-heading">MENU</div>

              {cur == "/" ? (
                <div className="menu-card-list">
                    <a href="#first" onClick={() => { handleNav();s1() }}>ABOUT US</a>
                  <Link to="/team">OUR TEAM</Link>
                  <Link to="/games">GAMES</Link>
                  <a href="#fourth" onClick={() => { handleNav(); s2()}}>TECH STACK</a>
                </div>
              ) : (
                <div className="menu-card-list">
                  <Link to='/'>HOME</Link>
                  <Link to="/team">OUR TEAM</Link>
                  <Link to="/games">GAMES</Link>
                  {/* <Link to='/'>ABOUT US</Link> */}
                </div>
              )}
            </div>
          </div>

          <div className="opened-nav-bt">
            <div>POWERED BY OVERENGINEERED</div>
            <div>METABOYS</div>
            <div>METABET © 2023 </div>
          </div>
        </div>
      </div>
       
    </>,
    document.getElementById('portal')
  )
}