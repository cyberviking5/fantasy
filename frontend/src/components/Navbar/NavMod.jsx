import React from 'react'
import ReactDom from 'react-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import win from '../../assets/win.mp4'
import Scroller from "../Scroller/Scroller";
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './NavMod.css'


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


  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <div className="opened-nav linear duration-500 ">
          <div className="opened-nav-top">
            <Link to="/" className="opened-nav-head">
              <span>METABET</span>
              <img src={logo} alt="" />
            </Link>
            <div className="opened-nav-close">
              <div>CLOSE</div>
              <span>
                <AiOutlineClose size={50} onClick={handleNav} />
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
                  <a href="#first" onClick={handleNav}>ABOUT US</a>
                  <Link to="/team">OUR TEAM</Link>
                  <Link to="/games">GAMES</Link>
                  <a href="#fourth" onClick={handleNav}>TECH STACK</a>
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