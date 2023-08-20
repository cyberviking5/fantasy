import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import Scroller from "../Scroller/Scroller";
import logo from "../../assets/logo.png";
import { address, abi } from "../../contracts_abi_address/NFT"
import { ethers, providers } from "ethers";
import {Link} from 'react-router-dom'
import NavMod from './NavMod'
import {motion} from 'framer-motion'

const Navbar = () => {


  const cur = window.location.pathname;

  async function connect() {
    try {
      if (window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setcon("CONNECTED");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [nav, setNav] = useState(false);
  const [con, setcon] = useState("CONNECT");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}>
      {nav ? (
        <NavMod cur={cur} handleNav={()=>{setNav()}}></NavMod>
      ) : (
        <div className="navbar linear duration-500">
          <Link to="/" className="nav-part1">
            <span className="logoHeading">METABET</span>
            <img src={logo} alt="" />
          </Link>
          <div className="nav-part2">
            <div className="nav-part2-main1">
              <Link to="/games" className="nav-games">
                GAMES
              </Link>
              <Link to="/team" className="nav-team">
                OUR TEAM
              </Link>
            </div>
            <div className="nav-part2-main2">
              <div className="nav-connect cursor-pointer" onClick={connect}>
                {con}
              </div>
              <div className="nav-menu" onClick={handleNav}>
                <div>MENU</div>
                <div className="menu-icon-open">
                  <AiOutlineMenu size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
