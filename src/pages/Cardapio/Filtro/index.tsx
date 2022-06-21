import styles from "./Filtro.module.scss";
import filtros from "./filtros.json";

type Ifiltro = typeof filtros[0];

interface Props {
    filtroSelecionado: number | null;
    setFiltroSelecionado: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtro({filtroSelecionado, setFiltroSelecionado}: Props) {
    function selecionarFiltro(filtro: Ifiltro) {
        if(filtro.id === filtroSelecionado) return setFiltroSelecionado(null);
        return setFiltroSelecionado(filtro.id);
    }
    return (
        <div className={styles.filtros}>
            {filtros.map(filtro => (
                <button className={`${styles.filtros__filtro} ${filtroSelecionado === filtro.id ? styles['filtros__filtro--ativo'] : ''}`} key={filtro.id} onClick={() => {selecionarFiltro(filtro)}}>{filtro.label}</button>
            ))}
        </div>
    );
}
