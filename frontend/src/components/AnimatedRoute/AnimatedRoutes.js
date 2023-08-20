import React from 'react'
import {Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Games from "../../pages/Games/Games";
import Team from "../../pages/Team/Team";
import Fb from "../../pages/Nolink/Fb/Fb";
import Ig from "../../pages/Nolink/Ig/Ig";
import Ln from "../../pages/Nolink/Ln/Ln";
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();
  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/games" element={<Games />} />
    <Route path="/team" element={<Team />} />
    <Route path="/fb" element={<Fb/>} />
    <Route path="/ig" element={<Ig/>} />
    <Route path="/ln" element={<Ln/>} />
    </Routes>
    </AnimatePresence>
   
  )
}

export default AnimatedRoutes
