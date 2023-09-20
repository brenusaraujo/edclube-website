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
  const [anoCarro, setAnoCarro] = useState(new Date().getFullYear());

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefoneChange = (e) => {
    setTelefoneUser(e.target.value);
  };

  const handleModeloCarroChange = (e) => {
    setModeloCarro(e.target.value);
  };

  const handleAnoCarroChange = (e) => {
    setAnoCarro(e.target.value);
  };

  const handleWhatsAppButtonClick = () => {
    const message = `Olá, tudo bem? Eu me chamo ${nome}, tenho um ${modeloCarro} ${anoCarro} e gostaria de uma cotação para meu veículo.`;

    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    window.dataLayer.push({
      'event': 'click_button_lead_qualificado',
      'email': email,

    });
  };
  const handleWhatsAppButtonClickWithoutMessage = () => {
    const message = `Olá, tudo bem? Gostaria de uma cotação para meu veículo.`;

    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    window.dataLayer.push({
      'event': 'click_button_lead'
    });
  };
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            O seu clube de benefícios!
          </h1>
          <p>
            *Não somos seguradora
          </p>
          <p className="primary-text">
            PROTEGER SEU VEÍCULO NÃO CUSTA CARO, IMPREVISTOS SIM!
          </p>
          <button onClick={handleWhatsAppButtonClickWithoutMessage} className="whatsapp-button" target="blank">
            <ImWhatsapp /> Fale conosco
          </button>
        </div>
        <div className="home-form-section">
          <h3 className="home-form-heading">Faça sua cotação agora mesmo!</h3>
          <br />
          <form action="post">
            <div className="form-section">
              <input
                style={{ width: '300px' }} type="text" id="nome" name="nome" placeholder="Seu nome" value={nome}
                onChange={handleNomeChange} />
            </div>

            <div className="form-section">
              <input style={{ width: '300px' }} type="email" id="email" name="email" placeholder="Seu email" required value={email}
                onChange={handleEmailChange} />
            </div>

            <div className="form-section">
              <input style={{ width: '300px' }} type="tel" id="phone" name="phone" placeholder="Seu telefone" pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}" required value={telefoneUser}
                onChange={handleTelefoneChange} />
            </div>

            <div className="form-section">
              <input style={{ width: '300px' }} type="text" id="modeloCarro" name="modeloCarro" placeholder="Modelo do carro" required value={modeloCarro}
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
            <button onClick={handleWhatsAppButtonClick} className="secondary-button" target="blank" >
              Enviar <FiArrowRight />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Home;
