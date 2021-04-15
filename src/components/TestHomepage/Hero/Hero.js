import React from "react";
import * as css from "./styles.module.css";
import logoSvg from "../../../assets/logo.svg";
import hero from "../../../assets/hero.svg";

const Hero = ({ setLoginOpen, setRegisterOpen }) => {
  return (
    <section className={css.root}>
      <div className={css.contentContainer}>
        <div className={css.textContainer}>
          <div className={css.logoStyle}>
            <img src={logoSvg} alt="Oktane 21 logo" className="w-full h-auto" />
            <div className={css.logoBorder} />
          </div>
          <h1 className={css.heroText}>
            All sessions are available in the event platform through April 23.
          </h1>
          <div className="flex mt-6">
            <button onClick={setRegisterOpen} className="btn btn-primary">
              Register Now
            </button>
            <button onClick={setLoginOpen} className="btn btn-primary ml-6">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className={css.heroImgContainer}>
        <img
          className="w-full h-full object-cover z-10 relative"
          src={hero}
          alt="hero design"
        />
      </div>
    </section>
  );
};

export default Hero;
