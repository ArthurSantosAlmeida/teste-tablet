import PropTypes from "prop-types";
import styles from "./Pastas.module.css";

// Dados das pastas centralizados — basta editar aqui para alterar a lista
const PASTAS = [
  { nome: "Trabalhista", documentos: 5  },
  { nome: "Cível",       documentos: 2  },
  { nome: "Consumidor",  documentos: 7  },
  { nome: "Outros",      documentos: 70 },
];

const PastaCard = ({ nome, documentos }) => (
  <div className={styles.pastaCard}>
    <img
      className={styles.folderIcone}
      loading="lazy"
      alt=""
      src="/Folder@2x.png"
    />
    <div className={styles.pastaTexto}>
      <h3 className={styles.pastaNome}>{nome}</h3>
      <span className={styles.pastaContagem}>{documentos} documentos</span>
    </div>
  </div>
);

PastaCard.propTypes = {
  nome:       PropTypes.string.isRequired,
  documentos: PropTypes.number.isRequired,
};

const Pastas = ({ className = "" }) => (
  <section className={[styles.pastas, className].join(" ")}>
    <div className={styles.cabecalho}>
      <h2 className={styles.titulo}>Pastas</h2>
      <div className={styles.verTodos}>
        <span>Ver todos</span>
        <img
          className={styles.setinha}
          loading="lazy"
          alt=""
          src="/setinha-1.svg"
        />
      </div>
    </div>

    <div className={styles.listaPastas}>
      {PASTAS.map((pasta) => (
        <PastaCard key={pasta.nome} {...pasta} />
      ))}
    </div>
  </section>
);

Pastas.propTypes = {
  className: PropTypes.string,
};

export default Pastas;
