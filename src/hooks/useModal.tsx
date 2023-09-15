import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalLayout from "../templates/ModalLayout";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<React.ReactNode>();

  const openModal = (component: React.ReactNode) => {
    setComponent(component);
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
