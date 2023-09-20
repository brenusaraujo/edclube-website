import React from "react";
import Google from "../Assets/google.png";
import TikTok from "../Assets/tik-tok.png";
import Meta from "../Assets/meta.png";

const Work = () => {
  const workInfoData = [
    {
      image: Google,
      title: "Consultor 1",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: TikTok,
      title: "Consultor 2",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Meta,
      title: "Consultor 3",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="consultants-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nossos parceiros</p>
        <h1 className="primary-heading">Confira quem são nosso parceiros</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
