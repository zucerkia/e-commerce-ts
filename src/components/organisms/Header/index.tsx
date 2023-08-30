import React from "react";
import Nav from "../../molecules/Nav";

import { header, headerLogo, headerIcon } from "./Header.module.css";

const Header = () => {
  return (
    <header className={header}>
      <a>
        <div className={headerLogo}>
          {/* <Icon className="header-icon" name="fa-cart-shopping" size="2rem" /> */}
          H
        </div>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
