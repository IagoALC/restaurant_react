import styles from "./Prato.module.scss";
import itens from "data/itens.json";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "pages/NotFound";

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = itens.find((item) => item.id === Number(id));
  if (!prato) return <NotFound />;
  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>{"< Voltar"}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <div className={styles.tags}>
            <div
              className={`${styles.tags__tipo} ${
                styles[`tags__tipo__${prato.category.label.toLowerCase()}`]
              }`}
            >
              {prato.category.label}
            </div>
            <div className={styles.tags__porcao}>{prato.size}g</div>
            <div className={styles.tags__qtdpessoas}>
              Serve {prato.serving} pessoa {prato.serving === 1 ? "" : "s"}
            </div>
            <div className={styles.tags__valor}>
              R$ {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
