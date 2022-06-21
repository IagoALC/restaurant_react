import { ReactComponent as Logo } from "assets/img/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <nav className={styles.menu}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <ul className={styles.menu__list}>
        {navItems.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
