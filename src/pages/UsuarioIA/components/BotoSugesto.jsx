import PropTypes from "prop-types";
import styles from "./BotoSugesto.module.css";

const BotoSugesto = ({ className = "", icone, texto, onClick }) => {
  return (
    <button className={`${styles.botoSugesto} ${className}`} onClick={onClick}>
      <div className={styles.contedoSugesto}>
        {icone && (
          <img
            className={styles.iconeCard}
            loading="lazy"
            alt=""
            src={icone}
          />
        )}
        <p className={styles.textoCard}>{texto}</p>
      </div>
    </button>
  );
};

BotoSugesto.propTypes = {
  className: PropTypes.string,
  icone: PropTypes.string,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BotoSugesto;