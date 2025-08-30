import React from "react";
import "./Hero.css";
import profile_img from "../../assets/me.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import github from "../../assets/github.svg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} class="circle-svg" alt="" />
      <h1>
        <span className="heroname">I'm Nazim Mestar,</span><br />
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Software Engineer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
          className="typing"
        />
        
      </h1>
      <p>
        I am a passionate web developer based in Algeria, specializing in building modern, responsive, and intuitive applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href={"#contact"}>
            Connect with me
          </AnchorLink>
        </div>
        <a href="https://github.com/nazimmestar" target="_blanck">
          <div className="hero-resume">
            <img src={github} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
