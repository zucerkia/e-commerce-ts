import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faShoppingCart,
  faXmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.tsx";
import "./index.css";
import { ShoppingCartProvider } from "./context/shoppingCartContext.tsx";

library.add(fas, faShoppingCart, faXmark, faTrashCan);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);
