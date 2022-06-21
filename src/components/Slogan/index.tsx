import { Outlet } from "react-router-dom";
import styles from "./Slogan.module.scss";
import styleTema from "styles/StyleTema.module.scss";
export default function Slogan() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
}
