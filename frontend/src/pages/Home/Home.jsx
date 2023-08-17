import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import {BsArrowUpRight , FiArrowUpRight} from 'react-icons/fi';
import Scroller from '../../components/Scroller/Scroller';
import paisa from '../../assets/paisa.mp4'
import hockeyyy from '../../assets/hockeyyy.jpg'
import crickettt from '../../assets/crickettt.jpg'
import footballl from '../../assets/footballl.jpg'
import tennisss from '../../assets/tennisss.jpg'
import {gsap} from "gsap";
import CustomEase from 'gsap/CustomEase'
import Rating from '../../components/Rating/Rating';


const Home = () => {


  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease:  'gsap.Power3.easeOut',
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease:  'gsap.Power3.easeOut',
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  return (
    <>
      <div className="home  h-[100vh]">
        <Navbar />
        <div className="landing-page">
          <div className="main">
            <div className="hero">
              <div className="hero-heading">
                NOW BET <br />
                ONLINE IN A MORE SECURE <br />
                WAY WITH <span>ME</span> US
              </div>
              <div className="hero-buttons">
                <button>Try Now</button>
                <button>Try Now</button>
              </div>
            </div>
            <div className="main-lastline">
              YOUR GATEWAY TO A REVOLUTIONARY FANTASY BETTING EXPERIENCE. WE'RE
              ON A MISSION TO TRANSFORM THE WAY YOU ENGAGE WITH SPORTS AND
              ENTERTAINMENT
            </div>
          </div>
        </div>
      </div>
      <Scroller />
      <div className="pannel" id="first">
        {/* <Scroller/> */}
        <div className="firstmain">
          <div className="firstmainText">
            <p className="firstbada">
              At <span>MetaBet</span>, we envision a world where users can
              participate in secure, transparent, and rewarding fantasy betting
              activities.{" "}
            </p>
            <p className="firstchota">
              Our platform harnesses the potential of blockchain to bring you an
              unparalleled level of trust and excitement. We're not just a
              betting website; we're a community-driven ecosystem that believes
              in fairness, innovation, and fun.
            </p>
          </div>
          <div className="firstvideo">
            <video autoPlay loop muted src={paisa}></video>
          </div>
        </div>
      </div>

      <Scroller />

      <div className="panel" id="second">
        <div className="sec-head">
          <div className="sec-feat">FEATURED GAMES</div>
          <div className="sec-fea-p">FAVORITES GAMES ON OUR PLATFORM</div>
        </div>
        
        <div id="second-tab">
          <div className="elem">
            <img src={crickettt} alt="" />
            <h1>CRICKET</h1>
          </div>
          <div className="elem">
            <img src={footballl} alt="" />
            <h1>FOOTBALL</h1>
          </div>
          <div className="elem ">
            <img src={hockeyyy} alt="" />
            <h1>HOCKEY</h1>
          </div>
          <div className="elem elemlast">
            <img src={tennisss} alt="" />
            <h1>TENNIS</h1>
          </div>
        </div>
      </div>

      <Scroller />



      <div className="panel" id="third">
        <div className='third-head'>
            <h1>REVIEWS & <br /><span>RATINGS</span></h1>
        </div>
        <div className='third-bot'>
           <Rating/>
        </div>
      </div>


      <Scroller />


      <div className="panel" id="fourth">
        <div>
            <h1>TECH STACK</h1>
            <p>TO MAKE THIS PROJECT POSSIBLE WE HAVE USED A NUMBER OF TECHNOLOGIES SO THAT WE CAN GIVE THE BEST PROJECT POSSIBLE .</p>
        </div>
        <div>

        </div>
      </div>
    </>
  );
}

export default Home;
