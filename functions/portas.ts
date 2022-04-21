import PortaModel from "../model/porta";

export function criarPortas(qtd: number, portaComPresente: number): PortaModel[] {
  return Array.from({ length: qtd }, (_, index) => {
    const numero = index + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((portaAtual) => {
    const igual = portaAtual.numero === portaModificada.numero;
    if (igual) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual: portaAtual.desselecionar();
    }
  });
}
