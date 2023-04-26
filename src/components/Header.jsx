import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/add">
          <Navbar.Brand>Add Blog</Navbar.Brand>
        </Link>
        <Link to="/about-us">
          <Navbar.Brand>About Us</Navbar.Brand>
        </Link>
        <Link to="/contacts">
          <Navbar.Brand>Contacts</Navbar.Brand>
        </Link>
        <Link to="/favorites">
          <Navbar.Brand>Favorites</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
