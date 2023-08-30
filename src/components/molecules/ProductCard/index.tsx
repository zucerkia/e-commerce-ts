// Components
import { Button } from "../../atomos/Button";

// Utils - Hooks
import { currency } from "../../../Utils/currency";

// Types
import { Product } from "../../../types/Products";

// Styles
import {
  product as productStyle,
  productImage,
  productBody,
  productInfo,
  productFooter,
} from "./Product.module.css";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product: productObj }: ProductProps): JSX.Element => {
  return (
    <div className={productStyle}>
      <div className={productImage}>
        <img src={productObj.thumbnail} alt="" />
      </div>
      <div className={productBody}>
        <div className={productInfo}>
          <h3>{productObj.title}</h3>
          <p>{productObj.description}</p>
          <span>{currency(productObj.price)}</span>
        </div>
        <div className={productFooter}>
          {/* <Button onClick={() => addToCart(product)}>Añadir al carrito</Button> */}
          <Button>Añadir al carrito</Button>
          <a>Ver mas</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
