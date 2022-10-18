import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Counter</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
