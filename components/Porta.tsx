import Presente from './Presente';
import styles from "../styles/Porta.module.css";
import PortaModel from "../model/porta";

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const porta  = props.value;
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : styles.frame;

  const alternarSelecao = e => props.onChange(porta.alternarSelecao());
  const abrir = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())};

  function renderPorta(){
    return (
      <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta} onClick={abrir}></div>
        </div>
    )
  }
  
  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.frame} ${selecionada}`}>
      {porta.fechada ? renderPorta() : porta.temPresente ? <Presente/> : false}
      </div>
      
      <div className={styles.chao}></div>
    </div>
  );
}
