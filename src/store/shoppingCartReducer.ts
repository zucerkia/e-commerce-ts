import { Product } from "../types/Products";
import { ShoppingCart } from "../types/ShoppingCart";
import { ActionTypes, ShoppingCartActions } from "./actions/types";

export interface State {
  shoppingCart: ShoppingCart;
  counter: number;
}

const initialState: State = {
  shoppingCart: {
    items: {},
    total: 0,
  },
  counter: 0,
};

export const shoppingCartReducer = (
  state = initialState,
  action: ShoppingCartActions
): State => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const newTotal = state.shoppingCart.total;
      const product = action.payload as Product;
      let newItem = { product, quantity: 1 };

      if (state.shoppingCart.items[product.id]) {
        newItem = { ...state.shoppingCart.items[product.id] };
        newItem.quantity += 1;
      }

      return {
        ...state,
        shoppingCart: {
          items: { ...state.shoppingCart.items, [product.id]: newItem },
          total: newTotal + 1,
        },
      };
    }

    case ActionTypes.REMOVE_ITEM: {
      const id = action.payload as number;
      const totalItem = state.shoppingCart.items[id].quantity;

      const newItems = { ...state.shoppingCart.items };
      delete newItems[id];

      return {
        ...state,
        shoppingCart: {
          items: newItems,
          total: state.shoppingCart.total - totalItem,
        },
      };
    }

    case ActionTypes.SUMAR: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    default:
      return state;
  }
};
