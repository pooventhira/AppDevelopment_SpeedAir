import React from "react";
import HeaderImage01 from '../../assets/images/mainImages/HeaderImage01.jpeg';
import HeaderImage02 from '../../assets/images/mainImages/HeaderImage02.png';
import '../../assets/styles/mainStyles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="welcome">Welcome to <span>SpeedAir</span></p>
        <p className="text">Your Delivery, Our Priority!</p>
        <div className="buttons">
          <button>Get Started</button>
          <button>Track Consignment</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="image1"><img src={HeaderImage01} alt=""></img></div>
        <div className="image2"><img src={HeaderImage02} alt=""></img></div>
      </div>
    </section>
  );
};

export default Hero;
