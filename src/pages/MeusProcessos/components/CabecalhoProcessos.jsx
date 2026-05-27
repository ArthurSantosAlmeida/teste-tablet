import { useState } from "react";
import PropTypes from "prop-types";
import { FILTROS } from "../data/processos";
import styles from "./CabecalhoProcessos.module.css";

/**
 * Cabeçalho da página Meus Processos — substitui Grupo.
 *
 * Mudanças:
 * - Nome semântico: CabecalhoProcessos em vez de Grupo.
 * - Abas geradas a partir de FILTROS (data/processos.js), sem markup repetido.
 * - Estado de aba ativa gerenciado internamente com useState.
 * - Contagem exibida como badge apenas na aba ativa (comportamento original preservado).
 * - Prop onFiltroChange permite que a página pai receba o filtro selecionado.
 */
const CabecalhoProcessos = ({ className = "", onFiltroChange }) => {
  const [filtroAtivo, setFiltroAtivo] = useState(FILTROS[0].id);

  const handleFiltroClick = (filtroId) => {
    setFiltroAtivo(filtroId);
    if (onFiltroChange) onFiltroChange(filtroId);
  };

  return (
    <section className={[styles.cabecalho, className].join(" ")}>
      {/* Título e subtítulo */}
      <div className={styles.titulo}>
        <h1 className={styles.paginaTitulo}>Meus processos</h1>
        <h3 className={styles.paginaSubtitulo}>
          Acompanhe seus projetos e consultas.
        </h3>
      </div>

      {/* Abas de filtro */}
      <nav className={styles.filtros}>
        {FILTROS.map((filtro) => {
          const ativo = filtro.id === filtroAtivo;
          return (
            <button
              key={filtro.id}
              className={ativo ? styles.filtroAtivo : styles.filtro}
              onClick={() => handleFiltroClick(filtro.id)}
              aria-pressed={ativo}
            >
              <img
                className={styles.filtroIcone}
                alt=""
                src={filtro.icone}
              />
              <span className={styles.filtroLabel}>{filtro.label}</span>
              {ativo && (
                <span className={styles.filtroBadge}>{filtro.contagem}</span>
              )}
            </button>
          );
        })}
      </nav>
    </section>
  );
};

CabecalhoProcessos.propTypes = {
  className: PropTypes.string,
  onFiltroChange: PropTypes.func,
};

export default CabecalhoProcessos;
