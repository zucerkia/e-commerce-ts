import { PropsWithChildren, createContext, useReducer } from "react";

import { Product } from "../types/Products";
import { State, shoppingCartReducer } from "../store/shoppingCartReducer";
import { addItem, removeItem } from "../store/actions";
import { ActionTypes } from "../store/actions/types";

type ShoppingCartContext = {
  state: State;
  addToCart: (product: Product) => void;
  deleteItem: (id: number) => void;
};

const initialState: State = {
  shoppingCart: {
    items: {},
    total: 0,
  },
  counter: 0,
};

const initialContext: ShoppingCartContext = {
  state: initialState,
  addToCart: () => null,
  deleteItem: () => null,
};

export const ShoppingCartContext =
  createContext<ShoppingCartContext>(initialContext);

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  // const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(
  //   initialValue.shoppingCart
  // );

  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addToCart = (product: Product) => {
    dispatch(addItem(product));
    // dispatch({
    //   type: ActionTypes.ADD_ITEM,
    //   payload: product
    // })
  };

  const deleteItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <ShoppingCartContext.Provider value={{ state, addToCart, deleteItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
