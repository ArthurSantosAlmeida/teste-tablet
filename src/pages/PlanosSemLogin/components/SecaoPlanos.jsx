import PropTypes from "prop-types";
import CardPlano from "./CardPlano";
import styles from "./SecaoPlanos.module.css";

/**
 * Seção genérica de planos — substitui SectionParaVoc e SectionParaEquipes.
 *
 * Props:
 * - titulo    : texto do cabeçalho da seção (ex: "Para você")
 * - icone     : ícone decorativo ao lado do título
 * - planos    : array de objetos de plano (ver src/data/planos.js)
 * - colunas   : 1 ou 2 — quantas colunas usar nas features dos cards
 */
const SecaoPlanos = ({ titulo, icone, planos = [], colunas = 1 }) => {
  return (
    <section className={styles.secao}>
      <header className={styles.cabecalho}>
        <img className={styles.icone} loading="lazy" alt="" src={icone} />
        <h3 className={styles.titulo}>{titulo}</h3>
      </header>

      <div className={styles.cards}>
        {planos.map((plano) => (
          <CardPlano
            key={plano.id}
            nome={plano.nome}
            descricao={plano.descricao}
            icone={plano.icone}
            preco={plano.preco}
            features={plano.features}
            tipoBotao={plano.tipoBotao}
            destaque={plano.destaque}
            colunas={colunas}
          />
        ))}
      </div>
    </section>
  );
};

SecaoPlanos.propTypes = {
  titulo: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  planos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      icone: PropTypes.string.isRequired,
      preco: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string),
      tipoBotao: PropTypes.oneOf(["assinar", "vendas"]),
      destaque: PropTypes.bool,
    })
  ),
  colunas: PropTypes.oneOf([1, 2]),
};

export default SecaoPlanos;
