import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
    ordernadorSelecionado: string | null;
    setOrdenadorSelecionado: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Ordenador({ordernadorSelecionado, setOrdenadorSelecionado}: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdernador = ordernadorSelecionado && opcoes.find(opcao => opcao.value === ordernadorSelecionado)?.nome;
    return (
        <button className={styles.ordenador} onClick={()=> setAberto(!aberto)} onBlur={() => setAberto(false)}>
            <span>{nomeOrdernador || 'Ordenar por'}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20}/>}
            <div className={`${styles.ordenador__options} ${aberto === true ? styles['ordenador__options--ativo'] : ''}`}>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={() => {setOrdenadorSelecionado(opcao.value)}}>{opcao.nome}</div>
                ))}
            </div>
        </button>
    );
}