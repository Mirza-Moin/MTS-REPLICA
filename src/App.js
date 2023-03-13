import "./App.scss";
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Link } from "react-scroll";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuIcon from "@mui/icons-material/Menu";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import Button from "./components/ReuseableComponents/button/Button";
import Artist from "./components/HomeComponents/artist/Artist";
import Team from "./components/HomeComponents/team/Team";
import Faq from "./components/HomeComponents/faq/Faq";
import Roadmap from "./components/HomeComponents/roadmap/Roadmap";
import About from "./components/HomeComponents/about/About";
import Mint from "./pages/mint/Mint";
import Welcome from "./components/HomeComponents/welcome/Welcome";

const HomeContainer = ()=>{
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/mint")
  }
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="home-container">
    <div className="home">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <LensOutlinedIcon className="logo-icon" />
          </div>

          <div className="icons">
            <TwitterIcon className="icon" />

            <InstagramIcon className="icon" />

            <SportsEsportsIcon className="icon" />
          </div>

          <div className={show ? "show-side-menu-list list" : "show-side-menu-list list hidden"}>
            <ul className="list-items">
              <li className="list-item" onClick={handleClick}>
                <Link
                onClick={handleClick}
                  activeClass="active"
                  to="home-welcome"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                  delay={200}
                >
                  WELCOM
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
              <Link
              onClick={handleClick}
                  activeClass="active"
                  to="home-about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                  delay={200}
                >
                  ABOUT
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
              <Link
              onClick={handleClick}
                  activeClass="active"
                  to="home-artist"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                  delay={200}
                >
                  ARTIST
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
              <Link
                  onClick={handleClick}
                  activeClass="active"
                  to="home-roadmap"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  delay={200}
                >
                  ROADMAP
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
              <Link
              onClick={handleClick}
                  activeClass="active"
                  to="home-team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  delay={200}
                >
                  TEAM
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
                <Link
                onClick={handleClick}
                  activeClass="active"
                  to="home-faq"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                  delay={200}
                >
                  FAQ
                </Link>
              </li>
              <li className="list-item" onClick={handleClick}>
                <Button title="MINT" handleClick={handleNavigate}/>
              </li>
            </ul>
          </div>
          <div className="menu-icon">
            <MenuIcon onClick={handleClick} />
          </div>
        </nav>
      </header>
      <main className="home-component-container">
        <section id="home-welcome">
        <Welcome/>
        </section>
        <section id="home-about">
          <About />
        </section>
        <section id="home-artist">
          <Artist />
        </section>
        <section id="home-roadmap">
          <Roadmap />
        </section>
        <section id="home-team">
          <div style={{fontSize:"2rem",width:"50%"}}>There is a Team Component which casuse some responsiveness issues that's why i commented it at <strong style={{color:"red"}}>App.js</strong> at line<span style={{color:"orange"}}> 156</span></div>
          {/* <Team /> */}
        </section>
        <section id="home-faq">
          <Faq />
        </section>
        <section className="bootom-links">
          <div className="logo">
            <LensOutlinedIcon className="icon" />
          </div>
          <div className="list">
            <ul>
              <li>WELCOME</li>
              <li>ABOUT</li>
              <li>ARTISTS</li>
              <li>ROADMAP</li>
              <li>TEAM</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="btn">
            <Button title="JOIN DISCORD" />
          </div>
        </section>
      </main>
    </div>
    <footer>
      <p>META TIGER SOCIETY - ALL RIGHTS RESERVED | DESIGN BY CERKA</p>
    </footer>
  </div>
  )
}

function App() {
 
  
  return (
    <Routes>
    <Route path="/" element={<HomeContainer/>}></Route>
    <Route path="/mint" element={<Mint/>}/>
    </Routes>
  );
}

export default App;
