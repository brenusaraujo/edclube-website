import React from "react";
// import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div> */}
      <a href="">imagem aqui</a>
      <div className="rightSide">
        <h1>Entre em contato com nossos consultores</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome completo</label>
          <input name="name" placeholder="Nome completo" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Email" type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Escreva sua mensagem"
            name="message"
            required
          ></textarea>
          <button type="submit">Envie sua mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
