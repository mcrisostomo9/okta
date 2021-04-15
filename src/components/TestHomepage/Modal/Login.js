import React from "react";
import { ctaGrid, border } from "./styles.module.css";

const Login = () => {
  return (
    <div className={ctaGrid}>
      <div className="flex flex-col justify-between text-center px-2">
        <p>Lorem ipsum dolor sit.</p>
        <button className="btn btn-primary mt-8 self-center">
          Continue with Okta
        </button>
      </div>
      <div className={border} />
      <div className="flex flex-col justify-between text-center px-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className="btn btn-secondary mt-8 self-center">Continue</button>
      </div>
    </div>
  );
};

export default Login;
