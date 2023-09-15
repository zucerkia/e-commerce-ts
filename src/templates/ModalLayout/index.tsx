import { PropsWithChildren } from "react";
import { Button } from "../../components/atomos/Button";
import Icon from "../../components/atomos/Icon";

import styles from "./ModalLayout.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const {
  modalContainer,
  modalOverlay,
  modal,
  modalHeader,
  modalBody,
  modalFooter,
} = styles;

const ModalLayout = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div className={modalContainer}>
      <div className={modalOverlay} onClick={onClose}></div>
      <div className={modal}>
        <div className={modalHeader}>
          <Icon name="xmark" size="18px" onClick={onClose} />
        </div>
        <div className={modalBody}>{children}</div>
        {/* <div className={modalFooter}>
          <Button onClick={onClose}> Aceptar </Button>
        </div> */}
      </div>
    </div>
  );
};

export default ModalLayout;
