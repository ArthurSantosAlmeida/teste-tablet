import { useCallback } from "react";
import CabecalhoProcessos from "./components/CabecalhoProcessos";
import CardProcesso from "./components/CardProcesso";
import { PROCESSOS } from "./data/processos";
import styles from "./MeusProcessos.module.css";
import Menu1 from "../../components/Menu1";

/**
 * Página Meus Processos.
 *
 * Mudanças em relação ao original:
 * - Dados dos processos importados de data/processos.js (sem estado local).
 * - Sem props de estilo inline nos componentes filhos.
 * - Handler de ação do card centralizado aqui (onAcaoProcesso).
 */
const MeusProcessos = () => {
  const handleAcaoProcesso = useCallback((processoId, acaoId) => {
    // TODO: integrar com API
    console.log(`Ação "${acaoId}" no processo "${processoId}"`);
  }, []);

  const handleFiltroChange = useCallback((filtroId) => {
    // TODO: filtrar PROCESSOS por status/tipo
    console.log(`Filtro selecionado: ${filtroId}`);
  }, []);

  return (
    <div className={styles.pagina}>
      <Menu1 />

      

      <main className={styles.conteudo}>
        <CabecalhoProcessos onFiltroChange={handleFiltroChange} />

        <section className={styles.listaProcessos}>
          {PROCESSOS.map((processo) => (
            <CardProcesso
              key={processo.id}
              categoria={processo.categoria}
              titulo={processo.titulo}
              numeroProcesso={processo.numeroProcesso}
              advogado={processo.advogado}
              atualizadoEm={processo.atualizadoEm}
              status={processo.status}
              onAcao={(acaoId) => handleAcaoProcesso(processo.id, acaoId)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default MeusProcessos;
