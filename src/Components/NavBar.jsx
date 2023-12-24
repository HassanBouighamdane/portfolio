import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/NavBar.css'
import DarkMode from "./DarkMode";
import { useDarkMode } from "./DarkModeContext";



function NavBar ()  {
  const { darkMode } = useDarkMode();

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://hbouighamdane.vercel.app">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/portfolio" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
              <Nav.Link href="/portfolio/skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
              <Nav.Link href="/portfolio/projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
              <Nav.Link href="/portfolio/education" className={activeLink === "education" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("education")}>Education</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hassan-bouighamdane-095b01254/" target="_blank" title="LinkedIn"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://www.facebook.com/hassan.bouighamdane/" target="_blank" title="Facebook"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://github.com/HassanBouighamdane" target="_blank" title="GitHub"><img src={navIcon3} alt="Github" /></a>
              </div>

              <a href="#connect">
              <button  className="vvd"  ><span>Let's Connect</span></button>
              </a>
              <DarkMode/>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}
export default NavBar