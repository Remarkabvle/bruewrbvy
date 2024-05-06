import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <p className="hero__price">Save $1040</p>
          <h1 className="hero__title">Meet your new Galaxy family</h1>
          <p className="hero__text">
          Bundle and save up to $1,040 with Galaxy S24 Ultra, Watch6 
          </p>
          <button className="hero__btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
