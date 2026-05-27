import PropTypes from "prop-types";
import styles from "./BotoPrincipal.module.css";

const BotoPrincipal = ({ className = "" }) => {
  return (
    <div className={[styles.botoPrincipal, className].join(" ")}>
      <b className={styles.boto}>Criar Conta</b>
    </div>
  );
};

BotoPrincipal.propTypes = {
  className: PropTypes.string,
};

export default BotoPrincipal;
