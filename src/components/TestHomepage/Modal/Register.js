import React from "react";
import { ctaGrid, border } from "./styles.module.css";

const Register = () => {
  return (
    <div>
      <div className={ctaGrid}>
        <div className="flex flex-col justify-between text-center px-2">
          <p>Lorem ipsum dolor sit.</p>
          <button className="btn btn-primary mt-5 md:mt-8 self-center">
            Continue with Okta
          </button>
        </div>
        <div className={border} />
        <div className="flex flex-col justify-between text-center px-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button className="btn btn-secondary mt-5 md:mt-8 self-center">
            Click here to register
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Please email{" "}
          <a
            href="#"
            className="font-semibold border-b-2 border-primary text-primary"
          >
            executivesummit@okta.com
          </a>
        </p>
        <p className="my-8 text-sm">
          *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          at deserunt eligendi enim error et exercitationem ipsam iste
          laboriosam mollitia necessitatibus neque nostrum qui, quis voluptas!
          Eligendi eos labore voluptate.
        </p>
      </div>
    </div>
  );
};

export default Register;
