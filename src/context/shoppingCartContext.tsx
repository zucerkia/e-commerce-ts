import { PropsWithChildren, createContext, useState } from "react";
import { Product } from "../types/Products";
import { ShoppingCart } from "../types/ShoppingCart";

type ShoppingCartContext = {
  shoppingCart: ShoppingCart;
  addToCart: (product: Product) => void;
  deleteItem: (id: number) => void;
};

const initialValue = {
  shoppingCart: {
    items: {},
    total: 0,
  },
  addToCart: () => null,
  deleteItem: () => null,
};

export const ShoppingCartContext =
  createContext<ShoppingCartContext>(initialValue);

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(
    initialValue.shoppingCart
  );

  /* 
  TODO: 
    ¿Como calcular el precio cuando se tiene multiple cantidad de un mismo producto? 
    ¿será mejor tener una nueva propiedad en el objeto que tenga un subtotal?
  */
  const addToCart = (product: Product) => {
    setShoppingCart(({ items, total }) => {
      const newTotal = total;
      let newItem = { product, quantity: 1 };

      if (items[product.id]) {
        newItem = { ...items[product.id] };
        newItem.quantity += 1;
      }

      return {
        items: { ...items, [product.id]: newItem },
        total: newTotal + 1,
      };
    });
  };

  const deleteItem = (id: number) => {
    setShoppingCart(({ items, total }) => {
      const totalItem = items[id].quantity;

      const newItems = { ...items };
      delete newItems[id];

      return {
        items: newItems,
        total: total - totalItem,
      };
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, deleteItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
