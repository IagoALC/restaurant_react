import itens from "data/itens.json";
import styles from "./Inicio.module.scss";
import styleTemas from "styles/StyleTema.module.scss";
import nossaCasa from 'assets/img/nossa_casa.png';
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();
  let listaRecomentados = itens;
  listaRecomentados = listaRecomentados
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 3);
  function redirecionarPrato(item: typeof itens[0]) {
    navigate(`/prato/${item.id}`, { state: { item } });
  }
  return (
    <section>
      <h3 className={styleTemas.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {listaRecomentados.map((item) => (
          <div key={item.id} className={styles.recomendado} onClick={() => redirecionarPrato(item)}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={styleTemas.titulo}> Nossa casa </h3> 
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
