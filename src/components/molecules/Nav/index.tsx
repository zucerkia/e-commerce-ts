import { useModal } from "../../../hooks/useModal";
import { Button } from "../../atomos/Button";

import styles from "./Nav.module.css";

const { headerNav, headerLinks, link } = styles;
const Nav = () => {
  const { Modal, openModal } = useModal(
    <p>
      login <input type="color" />
    </p>
  );
  const getAuth = false;
  return (
    <nav className={headerNav}>
      <Modal />
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
          <Button onClick={openModal}> Iniciar sesión </Button>
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
