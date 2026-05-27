import PropTypes from "prop-types";
import styles from "./Documentos.module.css";
import { NavLink } from "react-router-dom";

const Documentos = ({ className = "" }) => {
  return (
    <NavLink to="/documentos" className={`${styles.botaoDocumentos} ${className}`}>
      <img
        className={styles.iconDocumento}
        loading="lazy"
        alt="Ícone Documentos"
        src="/Vector3.svg"
      />
      <span className={styles.textoBotao}>Documentos</span>
    </NavLink>
  );
};

Documentos.propTypes = {
  className: PropTypes.string,
};

export default Documentos;