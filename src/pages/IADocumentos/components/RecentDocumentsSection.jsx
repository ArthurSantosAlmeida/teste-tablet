import PropTypes from "prop-types";
import styles from "./RecentDocumentsSection.module.css";

// Dados dos documentos centralizados — basta editar aqui para alterar a lista
const DOCUMENTOS = [
  {
    id:      1,
    nome:    "Contrato de trabalho",
    pasta:   "Trabalhista",
    data:    "12/05/2025",
    tamanho: "2.4 MB",
    icone:   "/icone-tipo-arquivo.svg",
  },
  {
    id:      2,
    nome:    "Foto do dano",
    pasta:   "Consumidor",
    data:    "12/05/2025",
    tamanho: "7.8 MB",
    icone:   "/ant-design-file-jpg-outlined.svg",
  },
  {
    id:      3,
    nome:    "Comprovante de residência",
    pasta:   "Civil",
    data:    "12/05/2025",
    tamanho: "4.4 MB",
    icone:   "/bi-filetype-docx.svg",
  },
];

const DocumentoItem = ({ nome, pasta, data, tamanho, icone }) => (
  <div className={styles.documentoItem}>
    <div className={styles.documentoInfo}>
      <img className={styles.documentoIcone} alt="" src={icone} />
      <div className={styles.documentoTexto}>
        <h3 className={styles.documentoNome}>{nome}</h3>
        <span className={styles.documentoMeta}>
          {pasta} • Enviado em {data} • {tamanho}
        </span>
      </div>
    </div>
    <img
      className={styles.menuIcone}
      alt="Opções"
      src="/mingcute-more-2-fill.svg"
    />
  </div>
);

DocumentoItem.propTypes = {
  nome:    PropTypes.string.isRequired,
  pasta:   PropTypes.string.isRequired,
  data:    PropTypes.string.isRequired,
  tamanho: PropTypes.string.isRequired,
  icone:   PropTypes.string.isRequired,
};

const RecentDocumentsSection = ({ className = "" }) => (
  <section className={[styles.recentDocumentsSection, className].join(" ")}>
    <div className={styles.cabecalho}>
      <h2 className={styles.titulo}>Documentos recentes</h2>
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

    <div className={styles.listaDocumentos}>
      {DOCUMENTOS.map((doc) => (
        <DocumentoItem key={doc.id} {...doc} />
      ))}
    </div>
  </section>
);

RecentDocumentsSection.propTypes = {
  className: PropTypes.string,
};

export default RecentDocumentsSection;
