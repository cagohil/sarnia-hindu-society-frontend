import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { debounce } from '../utilities/helpers';
import logo from '../assets/images/logo.png';
import AOS from "aos";
import "aos/dist/aos.css";
import {LinkContainer} from 'react-router-bootstrap'
import { ToggleOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const handleClick = (e) => {
  window.scroll(0, 0);
  ToggleOff()
 }

 AOS.init({});

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('adminToken');
    navigate('/#/login');
    window.scroll(0, 0);
    toast.success('Logout Successfully!');
  }
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  const navbarStyles = {
    position: 'fixed',
    color:"white !important",
    width: '100%',
    textAlign: 'center',
    zIndex:'11',
    transition: 'top 0.6s',
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 10%)",
    borderBottom: "2px solid #ad603a"
  }
  return (
    <div className="navbar-header" >
      <Container><Navbar expand="lg">
        <Navbar.Brand to="/"><img data-aos="zoom-in-down" alt='' src={logo} style={{width:'80px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <LinkContainer to="/"><Nav.Link className='linkOne'>Home</Nav.Link></LinkContainer>

              <NavDropdown className='linktwo' title="About Us" id="basic-nav-dropdown">
              <LinkContainer  to="/about-city-of-sarnia">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>About City Of Sarnia</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to="/what-we-do">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>What We do</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to="/board-of-directors-and-other-function">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Board of Directors and other Functions</NavDropdown.Item></LinkContainer>
              <LinkContainer  to="/events">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Upcoming Events</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to="/schedule">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Monthly Mandir Schedule</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to="/education">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Education</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer  to="/gallery">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Photo Gallery</NavDropdown.Item>
              </LinkContainer>


              <LinkContainer  to="/aarti-audios">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Aarti Audios</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to="/shs-bhajan-book">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>SHS Bhajan book</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/membership"><Nav.Link className='linktwo'>Membership</Nav.Link></LinkContainer>
              <LinkContainer to="/donation"><Nav.Link className='linktwo'>Donation</Nav.Link></LinkContainer>
              <LinkContainer to="/mandir-rentals"><Nav.Link className='linktwo'>Mandir Rentals</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link className='linktwo'>Contact</Nav.Link></LinkContainer>
              {!localStorage.getItem('adminToken')?
              <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
              :<LinkContainer to="/login" onClick={handleLogout}><Nav.Link>Logout<i className="ml-1 fa-solid fa-arrow-right-from-bracket"></i></Nav.Link></LinkContainer>}
            </Nav>

          </Navbar.Collapse>
        </Navbar></Container>
        
      {/* <div className='navbar2' style={{ ...navbarStyles, top: visible ? '-520px' : '0' }}>
      <Container ><Navbar expand="lg">
        <Navbar.Brand to="/"><img alt='' data-aos="zoom-in-down" src={logo} style={{width:'80px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className='nav-link2 navbarHeight'>
              <LinkContainer onClick={handleClick} to="/"><Nav.Link className='linkOne'>Home</Nav.Link></LinkContainer>
              <NavDropdown className='linktwo' title="About Us" id="basic-nav-dropdown">
              <LinkContainer  to="/about-city-of-sarnia">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>About City Of Sarnia</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer onClick={handleClick} to="/what-we-do">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>What We do</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer onClick={handleClick} to="/board-of-directors-and-other-function">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Board of Directors and other Functions</NavDropdown.Item></LinkContainer>
              <LinkContainer onClick={handleClick} to="/events">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Upcoming Events</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer onClick={handleClick} to="/schedule">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Monthly Mandir Schedule</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer onClick={handleClick} to="/education">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Education</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer onClick={handleClick} to="/mandir-rentals">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Mandir Rentals</NavDropdown.Item>
              </LinkContainer>


              <LinkContainer onClick={handleClick} to="/aarti-audios">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>Aarti Audios</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer onClick={handleClick} to="/shs-bhajan-book">
              <NavDropdown.Item ><i className="fa-solid fa-angle-right pr-2"></i>SHS Bhajan book</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>

              <LinkContainer onClick={handleClick} to="/membership"><Nav.Link className='linktwo'>Membership</Nav.Link></LinkContainer>
              <LinkContainer onClick={handleClick} to="/donation"><Nav.Link className='linktwo'>Donation</Nav.Link></LinkContainer>
              <LinkContainer onClick={handleClick} to="/gallery"><Nav.Link className='linktwo'>Photo Gallery</Nav.Link></LinkContainer>
              <LinkContainer onClick={handleClick} to="/contact"><Nav.Link className='linktwo'>Contact</Nav.Link></LinkContainer>
              {!localStorage.getItem('adminToken')?
              <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
              :<LinkContainer to="/login" onClick={handleLogout}><Nav.Link>Logout<i className="ml-1 fa-solid fa-arrow-right-from-bracket"></i></Nav.Link></LinkContainer>}
            </Nav>
          </Navbar.Collapse>
        </Navbar></Container>
      </div> */}
    </div>
    
  );
}
export default Header