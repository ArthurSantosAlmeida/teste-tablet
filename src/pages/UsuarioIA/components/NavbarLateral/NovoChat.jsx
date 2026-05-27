import PropTypes from "prop-types";
import styles from "./NovoChat.module.css";

const NovoChat = ({ className = "", onClick }) => {
  return (
    <button className={`${styles.botaoNovoChat} ${className}`} onClick={onClick}>
      <img
        className={styles.iconPlus}
        loading="lazy"
        alt=""
        src="/Vector2.svg"
      />
      <span className={styles.textoBotao}>Novo chat</span>
    </button>
  );
};

NovoChat.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NovoChat;