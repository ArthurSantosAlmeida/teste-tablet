import PropTypes from "prop-types";
import styles from "./BotaoPlano.module.css";

/**
 * Botão de ação dos cards de plano.
 * - variante "assinar": borda escura, para planos individuais
 * - variante "vendas": fundo escuro, para planos enterprise
 */
const BotaoPlano = ({ variante = "assinar", onClick, className = "" }) => {
  const label = variante === "vendas" ? "Falar com vendas" : "Assinar plano";

  return (
    <button
      className={[styles.botao, styles[variante], className].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

BotaoPlano.propTypes = {
  variante: PropTypes.oneOf(["assinar", "vendas"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default BotaoPlano;
