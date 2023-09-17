import React from "react";
import { ImWhatsapp } from "react-icons/im"

const Contact = () => {
  const telefone = 5571992402531;
  const URL_WHATSAPP_SEM_MENSAGEM = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20para%20meu%20ve%C3%ADculo%20`;

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Em que podemos te ajudar?</h1>
      <h1 className="primary-heading">Entre em contato conosco!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Seu nome" />
        <a href={URL_WHATSAPP_SEM_MENSAGEM} className="whatsapp-button" target="blank">
          <ImWhatsapp /> Fale conosco
        </a>
      </div>
    </div>
  );
};

export default Contact;
