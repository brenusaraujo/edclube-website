import React from "react";
import { FiInstagram, } from 'react-icons/fi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FiInstagram /> <FaLinkedin /> <FaWhatsapp />
      </div>
      <p> &copy; 2023 EdClube</p>
    </div>
  );
}

export default Footer;
