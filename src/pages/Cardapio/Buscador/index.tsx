import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
    buscar: string;
    setBuscador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({buscar, setBuscador}: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={buscar}
        onChange={(e) => setBuscador(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}