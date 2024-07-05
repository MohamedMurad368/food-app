import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Food_Assets/assets/logo/logo.png';
import '../../Stayle/Header.css'; // Assuming this is the correct path to your CSS file

const Header = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={nav ? "sticky" : ""}>
        <Container>
          {/* Ensure Navbar.Brand is wrapped correctly */}
          <Navbar.Brand as={Link} to="/" className='logo'>
            <img src={Logo} alt="Logo" className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Use Nav.Link as={Link} for each link */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {/* Example with a cart icon */}
              <Nav.Link as={Link} to="/">
                <div className='cart'>
                  <i className="bi bi-bag fs-5"></i>
                  <em className='roundpoint'></em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
