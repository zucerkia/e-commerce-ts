import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.tsx";
import "./index.css";

library.add(fas, faShoppingCart, faXmark);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
