import PropTypes from "prop-types";
import BotaoPlano from "./BotaoPlano";
import styles from "./CardPlano.module.css";

/**
 * Card genérico de plano — substitui CartoPlanoPtala e CartesParaVoc.
 *
 * Props:
 * - nome        : nome do plano (ex: "Pétala", "Ramo")
 * - descricao   : subtítulo do plano (ex: "Para clientes")
 * - icone       : caminho da imagem/ícone do plano
 * - preco       : valor mensal em formato string (ex: "29,90")
 * - features    : array de strings com os benefícios do plano
 * - tipoBotao   : "assinar" | "vendas"
 * - destaque    : boolean — aplica borda colorida no card em destaque
 * - colunas     : número de colunas para exibir as features (1 ou 2)
 */
const CardPlano = ({
  nome,
  descricao,
  icone,
  preco,
  features = [],
  tipoBotao = "assinar",
  destaque = false,
  colunas = 1,
  className = "",
}) => {
  const cardClass = [
    styles.card,
    destaque ? styles.destaque : "",
    colunas === 2 ? styles.duasColunas : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClass}>
      {/* Cabeçalho: ícone + nome + preço */}
      <header className={styles.cabecalho}>
        <div className={styles.iconeContainer}>
          <img className={styles.icone} loading="lazy" alt={nome} src={icone} />
        </div>

        <div className={styles.infoPlano}>
          <div className={styles.nomeEDescricao}>
            <h2 className={styles.nome}>{nome}</h2>
            <h3 className={styles.descricao}>{descricao}</h3>
          </div>
          <div className={styles.preco}>
            <span className={styles.cifrao}>R$</span>
            <span className={styles.valor}>{preco}</span>
            <span className={styles.periodo}>/mês</span>
          </div>
        </div>
      </header>

      {/* Divisor */}
      <img
        className={styles.divisor}
        loading="lazy"
        alt=""
        src="/Frame-21472244501@2x.png"
      />

      {/* Lista de benefícios */}
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <img
              className={styles.checkIcon}
              alt="Incluso"
              src="/Check1.svg"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Botão de ação */}
      <BotaoPlano variante={tipoBotao} />
    </article>
  );
};

CardPlano.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  tipoBotao: PropTypes.oneOf(["assinar", "vendas"]),
  destaque: PropTypes.bool,
  colunas: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
};

export default CardPlano;
