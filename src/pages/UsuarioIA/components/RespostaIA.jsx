import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./RespostaIA.module.css";

// Ícone do girassol (logo Juriki) para o avatar da IA
const AvatarIA = () => (
  <div className={styles.avatarIA}>
    <img src="/logo-icon.png" alt="Juriki" />
  </div>
);

/**
 * Componentes customizados do react-markdown.
 * Cada elemento HTML do Markdown recebe estilo visual que replica
 * o layout da segunda imagem (checkmarks verdes, caixa de dica, disclaimer).
 */
const componentesMarkdown = {
  // Parágrafos comuns
  p({ children }) {
    // Detecta o bloco "Importante:" e usa o estilo de disclaimer
    const texto = String(children);
    if (texto.startsWith("Importante:") || texto.includes("caráter informativo")) {
      return (
        <div className={styles.blocoImportante}>
          <span className={styles.iconeEscudo}>🛡️</span>
          <p className={styles.textoImportante}>{children}</p>
        </div>
      );
    }
    return <p className={styles.paragrafo}>{children}</p>;
  },

  // Itens de lista — exibe ✅ verde no lugar do bullet padrão
  li({ children }) {
    return (
      <li className={styles.itemLista}>
        <span className={styles.checkVerde}>✅</span>
        <span>{children}</span>
      </li>
    );
  },

  ul({ children }) {
    return <ul className={styles.lista}>{children}</ul>;
  },

  // Negrito — destaca o termo-chave antes dos dois pontos
  strong({ children }) {
    return <strong className={styles.negrito}>{children}</strong>;
  },

  // Títulos H3 — usados para seções como "💡 O que você pode fazer?"
  h3({ children }) {
    const texto = String(children);
    const ehDica = texto.includes("💡") || texto.toLowerCase().includes("o que você pode fazer");
    return (
      <h3 className={ehDica ? styles.tituloDica : styles.tituloSecao}>
        {children}
      </h3>
    );
  },

  // Blockquote — usado como alternativa para a seção de dica
  blockquote({ children }) {
    return (
      <div className={styles.blocoDica}>
        <span className={styles.iconeDica}>💡</span>
        <div>{children}</div>
      </div>
    );
  },
};

/**
 * RespostaIA
 *
 * Props:
 *  - conteudo  : string  — texto markdown retornado pelo n8n
 *  - horario   : string  — ex: "10:26"
 *  - carregando: boolean — exibe shimmer enquanto aguarda resposta
 */
const RespostaIA = ({ conteudo, horario, carregando = false }) => {
  if (carregando) {
    return (
      <div className={styles.mensagemIA}>
        <AvatarIA />
        <div className={`${styles.bolha} ${styles.shimmer}`}>
          <div className={styles.linhaShimmer} />
          <div className={styles.linhaShimmer} style={{ width: "80%" }} />
          <div className={styles.linhaShimmer} style={{ width: "60%" }} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mensagemIA}>
      <AvatarIA />
      <div className={styles.bolha}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={componentesMarkdown}
        >
          {conteudo}
        </ReactMarkdown>
        {horario && <span className={styles.horario}>{horario}</span>}
      </div>
    </div>
  );
};

export default RespostaIA;
