import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import "../styles/Home.css";
import { useState } from "react";

function Home() {
  return (
    // <div className="home" style={{ backgroundImage: `url(${logo})` }}>
    <div className="home-1">
      <img src={logo} alt="logo da empresa" className="logo" />
      <div className="headerContainer">
        {/* <h1>EDCLUBE.MAIS</h1> */}
        <div>
          <p>Proteger seu veículo não custa caro, imprevisto sim!</p>
          <p>Faça agora sua cotação!</p>
        </div>
        <form action="submit" className="form-solicitacao">
          <input type="text" placeholder="Nome" className="input-form" />
          <div className="divisao-form">
            <div>
              <input type="email" placeholder="E-mail" />
              <input type="phone" placeholder="Telefone" />
            </div>
            <div>
              <input type="text" placeholder="Modelo do veículo" />
              <input type="select" placeholder="Ano" />
            </div>
          </div>
        </form>
        <Link to="/menu">
          <button>Enviar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
