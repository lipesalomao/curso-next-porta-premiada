import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import Link from 'next/link';
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {

const [qtd, setQtd] = useState(3);
const [portaComPresente, setPortaComPresente] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica text="Quantidade de portas" value={qtd} onChange={novaQtd => setQtd(novaQtd)}/>
        </Card>
      </div>
      <div>
        <Card>
        <EntradaNumerica text="Porta com prêmio" value={portaComPresente} onChange={comPresente => setPortaComPresente(comPresente)}/>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtd}/${portaComPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
