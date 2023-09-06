import Icon from "../../atomos/Icon";
import { useModal } from "../../../hooks/useModal";

import styles from "./ShoppingCartBadge.module.css";

const { cartButton, cartIcon, cartBadge } = styles;
const ShoppingCartBadge = () => {
  const { Modal, openModal } = useModal(<p>hola</p>);
  return (
    <>
      <button onClick={openModal} className={cartButton}>
        <Icon className={cartIcon} name="shopping-cart" size="18px" />
        <span className={cartBadge}>{1}</span>
      </button>
      <Modal />
    </>
  );
};

export default ShoppingCartBadge;
