import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Dados dos botões de ação centralizados aqui — fácil de adicionar/remover
const BOTOES_ACAO = [
  { label: "Enviar documento", icone: "/upload.svg", variante: "amarelo" },
  { label: "Filtrar documentos", icone: "/filtro.svg", variante: "amarelo" },
  { label: "Criar pasta", icone: "/adicionar.svg", variante: "sereno" },
];

const BotaoAcao = ({ label, icone, variante }) => (
  <div className={`${styles.botaoAcao} ${styles[variante]}`}>
    <span>{label}</span>
    <img src={icone} alt="" />
  </div>
);

BotaoAcao.propTypes = {
  label: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  variante: PropTypes.string.isRequired,
};

const PageHeader = ({ className = "" }) => {
  const navigate = useNavigate();

  const [busca, setBusca] = useState("");

  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.linkVoltar} onClick={() => navigate(-1)}>
        <img
          className={styles.setinha}
          loading="lazy"
          alt="Voltar"
          src="/setinha-1.svg"
        />
        <span>Voltar</span>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.titulos}>
          <h1 className={styles.titulo}>Meus documentos</h1>
          <p className={styles.subtitulo}>
            Organize e envie documentos para receber análises e orientações da
            Juriki IA
          </p>
        </div>

        <div className={styles.acoes}>
          <div className={styles.campoBusca}>
            <input
              className={styles.inputBusca}
              type="text"
              placeholder="Buscar documento"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <img
              className={styles.lupaIcone}
              alt="Buscar"
              src="/lupa.svg"
              style={{ cursor: "pointer" }}
              onClick={() => setBusca("")}
            />
          </div>

          {BOTOES_ACAO.map((botao) => (
            <BotaoAcao key={botao.label} {...botao} />
          ))}
        </div>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
