import React from "react";
import "./intro.css";
import profilPicture from "../../bilder/Baatbilde.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introHello">
          <span className="hello1">Hello, I am </span>
          <span className="introName">Johnny</span>
        </span>
        <span className="hello">
          <span className="a">an up and coming </span>
          <span className="introJoke">Master Developer</span>
        </span>
        <p className="introPara">
          I am in my third year of what will be a freely composed bachelor
          <br />
          with a main focus on programming and system architecture
        </p>
      </div>
      <img src={profilPicture} alt="Profil " className="bg" />
    </section>
  );
};

export default Intro;
