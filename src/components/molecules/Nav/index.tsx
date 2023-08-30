import { Button } from "../../atomos/Button";

import { headerNav, headerLinks, link } from "./Nav.module.css";

const Nav = () => {
  const getAuth = false;
  return (
    <nav className={headerNav}>
      <ul className={headerLinks}>
        <li className={link}>
          <a>Sobre nosotros</a>
        </li>
        <li className={link}>
          <a>Contáctenos</a>
        </li>
      </ul>
      {/* <CartButton /> */}
      {!getAuth ? (
        <div>
          <Button onClick={() => {}}> Iniciar sesión </Button>
          <Button onClick={() => {}} as="secondary">
            Regístrate
          </Button>
        </div>
      ) : (
        <Button onClick={() => {}}> Dashboard </Button>
      )}
    </nav>
  );
};

export default Nav;
