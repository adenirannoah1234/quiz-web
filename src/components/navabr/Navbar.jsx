import React from 'react';
import logo from '../../images/quiz logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h3>Quiz web app</h3>
    </nav>
  );
};

export default Navbar;
