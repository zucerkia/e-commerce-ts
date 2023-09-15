import { ShoppingCartBadge } from "..";
import { useModal } from "../../../hooks/useModal";
import { Button } from "../../atomos/Button";
import LoginForm from "../../organisms/LoginForm";
import RegisterForm from "../../organisms/RegisterForm";

import styles from "./Nav.module.css";

const { headerNav, headerLinks, link } = styles;
const Nav = () => {
  const { Modal, openModal, closeModal } = useModal();
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
      <ShoppingCartBadge />
      {/* <CartButton /> */}
      {!getAuth ? (
        <div>
          <Button onClick={() => openModal(<LoginForm />)}>
            {" "}
            Iniciar sesión{" "}
          </Button>
          <Button
            onClick={() => openModal(<RegisterForm closeModal={closeModal} />)}
            as="secondary"
          >
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
