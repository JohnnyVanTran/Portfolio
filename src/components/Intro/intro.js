import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import profilPicture from "../../bilder/Baatbilde.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello1">hello</span>
        <span className="hello">
          I am
          <span className="introName">Johnny </span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am in my third year of what will be a freely composed bachelor with
          a main focus on programming and system architecture
        </p>
      </div>
      <img src={profilPicture} alt="Profil " className="bg" />
    </section>
  );
};

export default Intro;
