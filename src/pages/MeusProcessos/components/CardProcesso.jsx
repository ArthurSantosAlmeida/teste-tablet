import PropTypes from "prop-types";
import { CORES_CATEGORIA, ACOES_PROCESSO } from "../data/processos";
import styles from "./CardProcesso.module.css";

/**
 * Card de processo — substitui CasoCompleto.
 *
 * Mudanças em relação ao original:
 * - Props semânticas (categoria, titulo, numeroProcesso…) em vez de
 *   props de estilo inline (trabalhistaBackgroundColor, rescisoIndiretaFlex…).
 * - Cores do badge de categoria resolvidas a partir de CORES_CATEGORIA,
 *   sem precisar passá-las como prop.
 * - Botões de ação gerados a partir de ACOES_PROCESSO (data/processos.js),
 *   eliminando o markup repetido dos 3 botões.
 * - useMemo removido — inline styles simples não precisam de memoização.
 */
const CardProcesso = ({
  categoria,
  titulo,
  numeroProcesso,
  advogado,
  atualizadoEm,
  status,
  onAcao,
  className = "",
}) => {
  const cores = CORES_CATEGORIA[categoria] ?? {
    fundo: "rgba(0,0,0,0.05)",
    texto: "#333",
  };

  return (
    <article className={[styles.card, className].join(" ")}>
      {/* ── Corpo do card ────────────────────────── */}
      <div className={styles.corpo}>
        {/* Linha: badge de categoria + título */}
        <div className={styles.cabecalho}>
          <span
            className={styles.badgeCategoria}
            style={{ backgroundColor: cores.fundo, color: cores.texto }}
          >
            {categoria}
          </span>
          <h2 className={styles.titulo}>{titulo}</h2>
        </div>

        {/* Linha: informações + status */}
        <div className={styles.detalhes}>
          <ul className={styles.informes}>
            <li>Processo nº {numeroProcesso}</li>
            <li>Advogada: {advogado}</li>
            <li>Atualizado em {atualizadoEm}</li>
          </ul>

          <div className={styles.statusArea}>
            <span className={styles.badgeStatus}>{status}</span>
            <img
              className={styles.iconeMenu}
              alt="Mais opções"
              src="/mingcute-more-2-fill1.svg"
            />
          </div>
        </div>
      </div>

      {/* ── Barra de ações ───────────────────────── */}
      <div className={styles.acoes}>
        {ACOES_PROCESSO.map((acao) => (
          <button
            key={acao.id}
            className={[styles.acao, styles[`acao_${acao.variante}`]].join(" ")}
            onClick={() => onAcao?.(acao.id)}
          >
            <img className={styles.acaoIcone} alt="" src={acao.icone} />
            <span>{acao.label}</span>
          </button>
        ))}
      </div>
    </article>
  );
};

CardProcesso.propTypes = {
  categoria: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  numeroProcesso: PropTypes.string.isRequired,
  advogado: PropTypes.string.isRequired,
  atualizadoEm: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  /** Callback chamado com o id da ação clicada ("ver", "cancelar", "trocar") */
  onAcao: PropTypes.func,
  className: PropTypes.string,
};

export default CardProcesso;
