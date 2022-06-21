import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtro from "./Filtro";
import Ordenador from "./Ordenador";
import Itens from "./Itens";
import styleTemas from "styles/StyleTema.module.scss";

export default function Cardapio() {
  const [buscar, setBuscador] = useState("");
  const [filtroSelecionado, setFiltroSelecionado] = useState<number | null>(
    null
  );
  const [ordernadorSelecionado, setOrdenadorSelecionado] = useState<
    string | null
  >(null);
  return (
    <>
      <section className={styles.cardapio}>
        <h3 className={styleTemas.titulo}>Cardápio</h3>
        <Buscador buscar={buscar} setBuscador={setBuscador} />
        <div className={styles.cardapio__filtros}>
          <Filtro
            filtroSelecionado={filtroSelecionado}
            setFiltroSelecionado={setFiltroSelecionado}
          />
          <Ordenador
            ordernadorSelecionado={ordernadorSelecionado}
            setOrdenadorSelecionado={setOrdenadorSelecionado}
          />
          <Itens
            buscar={buscar}
            filtroSelecionado={filtroSelecionado}
            ordenadorSelecionado={ordernadorSelecionado}
          />
        </div>
      </section>
    </>
  );
}
