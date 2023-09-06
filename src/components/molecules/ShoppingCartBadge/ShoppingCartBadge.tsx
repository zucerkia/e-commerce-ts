import Icon from "../../atomos/Icon";
import { useModal } from "../../../hooks/useModal";

import styles from "./ShoppingCartBadge.module.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/shoppingCartContext";
import CartList from "../CartList";

const { cartButton, cartIcon, cartBadge } = styles;
const ShoppingCartBadge = () => {
  const { Modal, openModal } = useModal(<CartList />);
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <button onClick={openModal} className={cartButton}>
        <Icon className={cartIcon} name="shopping-cart" size="18px" />
        <span className={cartBadge}>{shoppingCart.total}</span>
      </button>
      <Modal />
    </>
  );
};

export default ShoppingCartBadge;
