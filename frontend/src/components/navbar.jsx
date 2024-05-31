import React from 'react';
import './navbar.css'; // Assuming you have a CSS file for styling
import { Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">TBDETECTX</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="chat">Chat with AI</a></li>
        <li><a href="locate">Locate</a></li>
      </ul>
      <button className="button" onClick={() => window.location.href = '/predict'}>Predict</button>
    </div>
  );
}

export default Navbar;
