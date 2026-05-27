import PropTypes from "prop-types";
import styles from "./Planos.module.css";
import { NavLink } from "react-router-dom";

const Planos = ({ className = "", onClick }) => {
  return (
    <NavLink to="/planoscomlogin" className={`${styles.botaoPlanos} ${className}`} onClick={onClick}>
      <img
        className={styles.iconPlano}
        loading="lazy"
        alt=""
        src="/Vector4.svg"
      />
      <span className={styles.textoBotao}>Planos</span>
    </NavLink>
  );
};

Planos.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Planos;