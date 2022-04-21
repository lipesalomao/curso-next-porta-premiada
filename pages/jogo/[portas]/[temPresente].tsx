import { useEffect, useState } from "react";
import styles from '../../../styles/Jogo.module.css';
import Porta from '../../../components/Porta'
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo(){
  const router = useRouter();
    const [portas, setPortas] = useState([]);
    const [valido, setValido] = useState(false);

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente

      const qtdValida = portas >= 3 && portas <= 20
      const temPresenteValido = temPresente >= 1 && temPresente <= portas

      setValido(qtdValida && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas, temPresente));
    }, [router?.query])

    function renderPortas(){
      return portas.map((porta) => {
        return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
      })
    }
    
    return (
      <div className={styles.jogo}>
          <div className={styles.portas}>
        {valido ? renderPortas() : <h2>Valores inválidos</h2>}

          </div>
          <div className={styles.botoes}>
            <Link href="/" passHref>
                <button>Reiniciar jogo</button>
            </Link>
          </div>
      </div>
    )
}