import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={"/"}>
        <Logo />
      </Link>
    </footer>
  );
}
