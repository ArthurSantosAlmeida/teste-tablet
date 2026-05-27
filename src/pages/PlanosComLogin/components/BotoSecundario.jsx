import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./BotoSecundario.module.css";

const BotoSecundario = ({ className = "" }) => {
  const onBotoSecundarioContainerClick = useCallback(() => {
    // Please sync "Pag - Login" to the project
  }, []);

  return (
    <div
      className={[styles.botoSecundario, className].join(" ")}
      onClick={onBotoSecundarioContainerClick}
    >
      <b className={styles.boto2}>Entrar</b>
    </div>
  );
};

BotoSecundario.propTypes = {
  className: PropTypes.string,
};

export default BotoSecundario;
