import React, { PropsWithChildren } from "react";
import Header from "../../components/organisms/Header";

import styles from "./Layout.module.css";

const { container } = styles;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={container}>{children}</main>
    </>
  );
};

export default Layout;
