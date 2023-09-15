import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdReorder } from 'react-icons/io'
import "../styles/Navbar.css";
import logo from '../assets/logo.png'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo da empresa" className="logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> Sobre nós </Link>
          <Link to="/contact"> Contato </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> Sobre nós </Link>
        <Link to="/contact"> Contato </Link>
        <button onClick={toggleNavbar}>
          <IoMdReorder />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
