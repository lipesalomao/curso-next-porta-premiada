import { useState } from "react";
import styles from '../styles/Jogo.module.css'
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import Link from 'next/link'

export default function Jogo(){
    const [portas, setPortas] = useState(criarPortas(6, 2));

    function renderPortas(){
      return portas.map((porta) => {
        return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
      })
    }
    
    
    return (
      <div className={styles.jogo}>
          <div className={styles.portas}>
        {renderPortas()}

          </div>
          <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar jogo</button>
            </Link>
          </div>
      </div>
    )
}