import styles from "./Item.module.scss";
import itens from "data/itens.json";
import { useNavigate } from "react-router-dom";
type Props = typeof itens[0];

export default function Item(props: Props) {
  const navigate = useNavigate();
  const { id, title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={`${styles.item__tipo} ${styles[`item__tipo__${category.label.toLowerCase()}`]}`}>{category.label}</div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving > 1 ? 's': ''}</div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
