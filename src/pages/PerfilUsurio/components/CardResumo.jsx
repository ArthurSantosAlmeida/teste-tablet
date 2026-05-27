import PropTypes from "prop-types";
import styles from "./CardResumo.module.css";

const CardResumo = ({ className = "", icone, titulo, descricao }) => (
  <div className={[styles.cardResumo, className].join(" ")}>
    <div className={styles.cabecalho}>
      <img className={styles.icone} loading="lazy" alt="" src={icone} />
      <div className={styles.textos}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <span className={styles.descricao}>{descricao}</span>
      </div>
    </div>
    <div className={styles.rodape}>
      <span className={styles.ver}>Ver</span>
      <img className={styles.setinha} alt="" src="/setinha-1.svg" />
    </div>
  </div>
);

CardResumo.propTypes = {
  className: PropTypes.string,
  icone:     PropTypes.string.isRequired,
  titulo:    PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default CardResumo;