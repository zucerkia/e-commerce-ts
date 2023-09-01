import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalLayout from "../templates/ModalLayout";

export const useModal = (component: React.ReactNode) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal = () => {
    return createPortal(
      <ModalLayout isOpen={isOpen} onClose={closeModal}>
        {component}
      </ModalLayout>,
      document.getElementById("root-modal") as Element
    );
  };

  return {
    openModal,
    closeModal,
    Modal,
  };
};
