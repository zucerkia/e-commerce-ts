// Components
import { Button } from "../../atomos/Button";

// Utils - Hooks
import { currency } from "../../../Utils/currency";

// Types
import { Product } from "../../../types/Products";

// Styles
import styles from "./Product.module.css";

import { useContext, useMemo } from "react";
import { ShoppingCartContext } from "../../../context/shoppingCartContext";

interface ProductProps {
  product: Product;
}

const {
  product: productStyle,
  productImage,
  productBody,
  productInfo,
  productFooter,
} = styles;

const ProductCard = ({ product: productObj }: ProductProps): JSX.Element => {
  const { addToCart } = useContext(ShoppingCartContext);

  const showCurrency = useMemo(() => {
    return currency(productObj.price);
  }, [productObj.price]);

  return (
    <div className={productStyle}>
      <div className={productImage}>
        <img src={productObj.thumbnail} alt="" />
      </div>
      <div className={productBody}>
        <div className={productInfo}>
          <h3>{productObj.title}</h3>
          <p>{productObj.description}</p>
          <span>{showCurrency}</span>
        </div>
        <div className={productFooter}>
          <Button onClick={() => addToCart(productObj)}>
            Añadir al carrito
          </Button>
          {/* <Button onClick={openModal}>Añadir al carrito</Button> */}
          <a>Ver mas</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
