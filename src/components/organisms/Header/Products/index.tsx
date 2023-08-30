import React, { PropsWithChildren } from "react";

import { products } from "./Products.module.css";

const Products = ({ children }: PropsWithChildren) => {
  return <section className={products}>{children}</section>;
};

export default Products;
