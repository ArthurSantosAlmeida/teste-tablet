import CardResumo from "./CardResumo";
import PropTypes from "prop-types";
import styles from "./ResumoDaConta.module.css";

const CARDS = [
  {
    icone:    "/heroicons-outline-chat@2x.png",
    titulo:   "Conversas realizadas",
    descricao: "Perguntas feitas para a IA",
  },
  {
    icone:    "/document@2x.png",
    titulo:   "Documentos enviados",
    descricao: "Arquivos analisados",
  },
  {
    icone:    "/mdi-light-calendar1@2x.png",
    titulo:   "Consultas agendadas",
    descricao: "Com advogados",
  },
];

const ResumoDaConta = ({ className = "" }) => (
  <section className={[styles.resumoDaConta, className].join(" ")}>
    <h2 className={styles.resumoDaConta2}>Resumo da conta</h2>
    <div className={styles.conjuntoDeResumo}>
      {CARDS.map((card) => (
        <CardResumo key={card.titulo} {...card} />
      ))}
    </div>
  </section>
);

ResumoDaConta.propTypes = {
  className: PropTypes.string,
};

export default ResumoDaConta;