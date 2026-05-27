import PropTypes from "prop-types";
import styles from "./ConversasRecentes.module.css";

const ConversasRecentes = ({ className = "", titulo = "Nova conversa" }) => {
  return (
    <div className={`${styles.itemConversa} ${className}`}>
      <img className={styles.iconItem} alt="Ícone de chat" src="/Vector5.svg" />
      <span className={styles.tituloConversa}>{titulo}</span>
    </div>
  );
};

ConversasRecentes.propTypes = {
  className: PropTypes.string,
  titulo: PropTypes.string,
};

export default ConversasRecentes;