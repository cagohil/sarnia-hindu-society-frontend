/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const handleClick = (e) => {
    window.scroll(0, 0)
}
AOS.init();
const Footer = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/#/login');
        window.scroll(0, 0);
        toast.success('Logout Successfully !');
    }
    return (
        <footer>
            <div className="bg-darka">
                <Container className='footerPadding'>
                    <Row >
                        <Col md={4} className="" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <div style={{ marginLeft: '20px' }}>
                                <h5 className="text-uppercase pt-2 font-weight-normal">Quick links</h5>
                                <ul className="ul-li-remove">
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/" className="a-fff"><i className="fa-solid fa-angle-right"></i> Home</Link></li>
                                    {!localStorage.getItem('adminToken') ?
                                        <li className="li-footer p1"><Link onClick={handleClick} to="/login" className="a-fff"><i className="fa-solid fa-angle-right"></i> Login</Link></li>
                                        : <li className="li-footer p1"><Link onClick={handleLogout} to="/login" className="a-fff"><i className="fa-solid fa-angle-right"></i> Logout<i className="ml-1 fa-solid fa-arrow-right-from-bracket"></i></Link></li>}
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/contact" className="a-fff"><i className="fa-solid fa-angle-right"></i> Contact Us</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/what-we-do" className="a-fff"><i className="fa-solid fa-angle-right"></i> What We do</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/board-of-directors-and-other-function" className="a-fff"><i className="fa-solid fa-angle-right"></i> Board of Directors <br /> and other Functions</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4} className="" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <div style={{ marginLeft: '20px' }}>
                                <h5 className="text-uppercase pt-2 font-weight-normal">Quick links</h5>
                                <ul className="ul-li-remove ">
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/events" className="a-fff"><i className="fa-solid fa-angle-right"></i> Events</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/schedule" className="a-fff"><i className="fa-solid fa-angle-right"></i> Schedule</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/membership" className="a-fff"><i className="fa-solid fa-angle-right"></i> Membership </Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/gallery" className="a-fff"><i className="fa-solid fa-angle-right"></i> Gallery</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/aarti" className="a-fff"><i className="fa-solid fa-angle-right"></i> Aarti</Link></li>
                                    <li className="li-footer p1"><Link onClick={handleClick} to="/donation" className="a-fff"><i className="fa-solid fa-angle-right"></i> Donation</Link></li>
                                </ul></div>
                        </Col>
                        <Col md={4} className="" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <div style={{ marginLeft: '20px' }}>
                                <h5 className="text-uppercase pt-2 font-weight-normal">Get in Touch</h5>
                                <ul className="ul-li-remove">
                                    <li className="li-footer a-bbb2"><a href="tel:000-000-0000" className="a-fff">+1 000-000-0000</a></li>
                                    <li className="li-footer a-bbb2"><a href="mailto:sarniahindusociety@yahoo.ca" className="a-fff">sarniahindusociety@yahoo.ca</a></li>
                                    <li className="li-footer a-bbb2"><a href="https://www.google.com/maps/place/217+College+Ave+N,+Sarnia,+ON+N7T+6B5,+Canada/@42.9746337,-82.4041141,17z/data=!3m1!4b1!4m5!3m4!1s0x88259cc5b5978ccf:0x22020c816248f77a!8m2!3d42.9746337!4d-82.4019201" rel="noopener noreferrer" target='_blank' className="a-fff">217 College Ave North, Sarnia,<br /> Ontario, N7T 6B5</a></li>
                                    <li>
                                        <div className='icon' >
                                            <div className='a-fff'>
                                                <a target="_blank" rel="loosener noreferrer" href="https://www.facebook.com/sarniahindusociety"><i className="fa fa-facebook-official fa-2x li-footer mr-2 font-weight-normal" aria-hidden="true"></i></a>
                                            </div>
                                            <div className='a-fff' >
                                                <a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-twitter-square fa-2x mr-2 li-footer  font-weight-normal" aria-hidden="true"></i></a>
                                            </div>
                                            <div className='a-fff'>
                                                <a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-instagram fa-2x mr-2 li-footer  font-weight-normal" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ display: 'flex', justifyContent: "center" }}>
                </Container>
            </div>
            <div className="bg-black bottemFooter">
                <Container>
                    <p className="p-2 m-0 text-center" ><Link onClick={handleClick} to="/">SARNIA HINDU SOCIETY</Link> - Copyright &copy; 2023. Design by <a
                        href="https://www.exultitsolution.com/" target="_blank" rel="noopener noreferrer">EXULT IT SOLUTION
                    </a></p>
                </Container>
            </div>
        </footer>
    );
}
export default Footer