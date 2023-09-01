import React, { PropsWithChildren } from "react";

import styles from "./Products.module.css";

const { products } = styles;
const Products = ({ children }: PropsWithChildren) => {
  return <section className={products}>{children}</section>;
};

export default Products;
