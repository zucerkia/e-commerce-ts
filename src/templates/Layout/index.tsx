import React, { PropsWithChildren } from "react";
import Header from "../../components/organisms/Header";
import styles from "./Layout.module.css";
import { Toaster } from "react-hot-toast";

const { container } = styles;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      <Header />
      <main className={container}>{children}</main>
    </>
  );
};

export default Layout;
