import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im"
import { useState } from "react";

function calcularAnoDosCarros(intervaloAnos) {
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - intervaloAnos + 1;
  const anoDosCarros = Array.from({ length: intervaloAnos }, (_, index) => anoInicial + index);
  return anoDosCarros;
}

const Home = () => {
  const intervaloAnos = 15;
  const anoDosCarros = calcularAnoDosCarros(intervaloAnos);
  const telefone = 5571992402531;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefoneUser, setTelefoneUser] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [anoCarro, setAnoCarro] = useState('');
  const URL_WHATSAPP = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Me%20chamo%20${nome}%2C%20meu%20carro%20%C3%A9%20o%20${modeloCarro}%20${anoCarro}%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20para%20meu%20ve%C3%ADculo%20`;
  const URL_WHATSAPP_SEM_MENSAGEM = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20para%20meu%20ve%C3%ADculo%20`;

  function formatarParaURL(texto) {
    const textoFormatado = texto.replace(/[^a-zA-Z0-9]+/g, ' ');
    return textoFormatado.split(' ').join('%20');
  }

  const handleNomeChange = (e) => {
    setNome(e.target.value);
    formatarParaURL(nome)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefoneChange = (e) => {
    setTelefoneUser(e.target.value);
  };

  const handleModeloCarroChange = (e) => {
    setModeloCarro(e.target.value);
    formatarParaURL(modeloCarro)
  };

  const handleAnoCarroChange = (e) => {
    setAnoCarro(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            O seu clube de benefícios!
          </h1>
          <p className="primary-text">
            PROTEGER SEU VEÍCULO NÃO CUSTA CARO, IMPREVISTOS SIM!
          </p>
          <a href={URL_WHATSAPP_SEM_MENSAGEM} className="whatsapp-button" target="blank">
            <ImWhatsapp /> Fale conosco
          </a>
        </div>
        <div className="home-form-section">
          <h3 className="home-form-heading">Faça sua cotação agora mesmo!</h3>
          <br />
          <form action="post">
            <div className="form-section">
              {/* <label htmlFor="nome">Seu nome:</label> */}
              <input
                style={{ width: '450px' }} type="text" id="nome" name="nome" placeholder="Seu nome" value={nome}
                onChange={handleNomeChange} />
            </div>

            <div className="form-section">
              {/* <label htmlFor="email">Seu email: </label> */}
              <input style={{ width: '450px' }} type="email" id="email" name="email" placeholder="Seu email" required value={email}
                onChange={handleEmailChange} />
            </div>

            <div className="form-section">
              {/* <label htmlFor="phone">Seu telefone:</label> */}
              <input style={{ width: '450px' }} type="tel" id="phone" name="phone" placeholder="Seu telefone" pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}" required value={telefoneUser}
                onChange={handleTelefoneChange} />
            </div>

            <div className="form-section">
              {/* <label htmlFor="modeloCarro">Modelo do carro:</label> */}
              <input style={{ width: '450px' }} type="text" id="modeloCarro" name="modeloCarro" placeholder="Modelo do carro" required value={modeloCarro}
                onChange={handleModeloCarroChange} />
            </div>

            <div className="form-section">
              <label htmlFor="anoCarro">Escolha o ano do carro:</label>
              <select id="anoCarro" value={anoCarro} onChange={handleAnoCarroChange}>
                {anoDosCarros.map((ano) => (
                  <option key={ano} value={ano}>
                    {ano}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <a href={URL_WHATSAPP} className="secondary-button" target="blank">
              Enviar <FiArrowRight />
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
