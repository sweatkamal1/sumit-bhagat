import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import './header.css'; 
import { Images } from './../image/index';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar expand="lg" className={`navbar-light bgs ${isSticky ? 'navbar-sticky' : ''}`}>
      <Container fluid>
        {/* Left Side with Image */}
        <BootstrapNavbar.Brand href="#/">
          <img className='sumit-logo' src={Images.Image16} alt="Logo" style={{ height: '80px', marginRight: '50px' }} />
        </BootstrapNavbar.Brand>

        {/* Toggler for Mobile Screens */}
        <BootstrapNavbar.Toggle aria-controls="navbarResponsive" className="custom-toggler" />

        {/* Collapsible Menu */}
        <BootstrapNavbar.Collapse id="navbarResponsive">
          {/* Right Side with Navigation Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#/" className="nav-item mx-2 clr-whites">Home</Nav.Link>
            <Nav.Link href="#/about" className="nav-item mx-2 clr-whites">About Us</Nav.Link>
            <Nav.Link href="#/activities" className="nav-item mx-2 clr-whites">Activities</Nav.Link>
            <Nav.Link href="#/events" className="nav-item mx-2 clr-whites">Events</Nav.Link>
            <Nav.Link href="#/gallery" className="nav-item mx-2 clr-whites">Gallery</Nav.Link>
            <Nav.Link href="#/contact" className="nav-item mx-2 clr-whites">Contact</Nav.Link>
          </Nav>
          {/* Contact Button */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <button className="btn btn-primary ms-lg-3">+91 87898 32218</button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
