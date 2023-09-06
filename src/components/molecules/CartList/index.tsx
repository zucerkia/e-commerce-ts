import { useContext } from "react";
import { currency } from "../../../Utils/currency";

import { ShoppingCartContext } from "../../../context/shoppingCartContext";

import styles from "./CartList.module.css";
import Icon from "../../atomos/Icon";

const { cart, cartList, cartItem, itemImg, itemDelete } = styles;
const CartList = () => {
  const { shoppingCart, deleteItem } = useContext(ShoppingCartContext);
  return (
    <div className={cart}>
      <h2>Mi Carrito</h2>
      {Object.values(shoppingCart.items).length === 0 && (
        <div>
          <h3>No hay elementos en el carrito</h3>
        </div>
      )}
      <ul className={cartList}>
        {Object.values(shoppingCart.items).map(({ product, quantity }) => (
          <li className={cartItem}>
            <img className={itemImg} src={product.thumbnail} alt="" />
            <span>({quantity})</span>
            <p>{product.title}</p>
            <span>{currency(product.price)}</span>
            <button
              className={itemDelete}
              onClick={() => deleteItem(product.id)}
            >
              <Icon name="trash-can" size="18px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
