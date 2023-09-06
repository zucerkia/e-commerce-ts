import { PropsWithChildren, createContext, useState } from "react";
import { ShoppingCart } from "../types/ShoppingCart";
import { Product } from "../types/Products";

// const emptyCart: ShoppingCart = {
//   products: {
//     0: {
//       item: {
//         title: "producto 1",
//         description: "lorem",
//         thumbnail: "",
//         price: 0,
//       },
//       quantity: 0,
//     },
//   },
//   total: 0,
// };

const emptyCart: ShoppingCart = {
  products: {},
  total: 0,
};

export const ShoppingCartContext = createContext(emptyCart);

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {

    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>()

    const addToCart = (product: Product) => {

        const value = {
            item: product,
            quantity: 0
        }

        setShoppingCart((oldValue) => {
            if(!shoppingCart?.products[product.id]) {
                oldValue?.products[product.id] = value
                return (
                    {
                        products: 
                    }
                )
            }
        })
    }


  return (
    <ShoppingCartContext.Provider value={emptyCart}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
