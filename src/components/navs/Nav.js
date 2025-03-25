import React, { useState, useEffect } from "react";
import "./navs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/logo.png";
import { Link } from "react-scroll";

function Navs() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar sticky="top" expand="lg" className={scrolling ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="home" smooth={true} offset={40} duration={500}>
            <img src={logo} title="logo" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="home" smooth={true} offset={40} duration={500}>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="we" smooth={true} offset={-120} duration={500}>
              <Nav.Link>About Us</Nav.Link>
            </Link>
            <Link to="explore" smooth={true} offset={-30} duration={500}>
              <Nav.Link>Explore Food</Nav.Link>
            </Link>
            <Link to="review" smooth={true} offset={-40} duration={500}>
              <Nav.Link>Reviews</Nav.Link>
            </Link>
            <Link to="faq" smooth={true} offset={-130} duration={500}>
              <Nav.Link>FAQ</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">1800 789 123</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
