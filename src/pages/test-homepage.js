import React from "react";
import { Hero, Modal, WhyAttend } from "../components/TestHomepage";
import { useModal } from "../hooks";

const TestHomepage = () => {
  const [
    modalState,
    { setLoginOpen, setRegisterOpen, setModalClose },
  ] = useModal();

  return (
    <div className="relative">
      <Hero setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />
      <WhyAttend />
      <Modal
        isModalOpen={modalState.isModalOpen}
        modalContent={modalState.modalContent}
        setModalClose={setModalClose}
      />
    </div>
  );
};

export default TestHomepage;
