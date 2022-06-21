import styles from "./Itens.module.scss";
import itens from "data/itens.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
  buscar: string;
  filtroSelecionado: number | null;
  ordenadorSelecionado: string | null;
}

export default function Itens(props: Props) {
  const { buscar, filtroSelecionado, ordenadorSelecionado } = props;
  const [lista, setLista] = useState(itens);
  function filtrarBusca(title: string) {
    const regex = new RegExp(buscar, "i");
    return regex.test(title);
  }

  function filtrarFiltro(id: number) {
    if (id !== null && filtroSelecionado !== null) {
      return filtroSelecionado === id;
    }
    return true;
  }

  function ordernar(novaLista: typeof itens) {
    switch (ordenadorSelecionado) {
      case "porcao":
        return novaLista.sort((a: any, b: any) => (a.size < b.size ? 1 : -1));
      case "preco":
        return novaLista.sort((a: any, b: any) => (a.price < b.price ? 1 : -1));
      case "qtd_pessoas":
        return novaLista.sort((a: any, b: any) =>
          a.serving < b.serving ? 1 : -1
        );
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const itensFiltrados = itens.filter(
      (item) => filtrarBusca(item.title) && filtrarFiltro(item.category.id)
    );
    setLista(ordernar(itensFiltrados));
  }, [buscar, filtroSelecionado, ordenadorSelecionado]);
  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
