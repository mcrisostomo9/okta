import { useReducer } from "react";

const initialState = {
  isModalOpen: false,
  modalContent: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MODAL_OPEN":
      return { modalContent: action.modalContent, isModalOpen: true };
    case "SET_MODAL_CLOSE":
      return { isModalOpen: false, modalContent: null };
    default:
      throw new Error();
  }
}

export const useModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoginOpen = () => {
    dispatch({ type: "SET_MODAL_OPEN", modalContent: "login" });
  };

  const setRegisterOpen = () => {
    dispatch({ type: "SET_MODAL_OPEN", modalContent: "register" });
  };

  const setModalClose = () => {
    dispatch({ type: "SET_MODAL_CLOSE", modalContent: null });
  };

  return [state, { setLoginOpen, setRegisterOpen, setModalClose }];
};
