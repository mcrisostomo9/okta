import React, { useRef } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "../../../hooks";
import Login from "./Login";
import Register from "./Register";
import {
  root,
  logo,
  modalContentStyle,
  closeButton,
} from "./styles.module.css";
import logoSvg from "../../../assets/logo.svg";

const Modal = ({ isModalOpen, modalContent, setModalClose }) => {
  // Create ref for modal content to be able to detect if a click is registered outside of the element
  const ref = useRef();
  useOnClickOutside(ref, setModalClose);

  const renderModalContent = () => {
    if (modalContent === "login") {
      return <Login />;
    } else if (modalContent === "register") {
      return <Register />;
    }
  };

  return (
    <div
      className={classNames(
        root,
        { "opacity-100 flex z-50": isModalOpen },
        { "opacity-0 z-0 hidden": !isModalOpen }
      )}
    >
      <div ref={ref} className={modalContentStyle}>
        <a className={closeButton} onClick={setModalClose} />
        <div className="mt-12 md:mt-6">
          <img className={logo} src={logoSvg} alt="Oktane21 logo" />
          {renderModalContent()}
          <p className="text-primary text-center text-xs">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
