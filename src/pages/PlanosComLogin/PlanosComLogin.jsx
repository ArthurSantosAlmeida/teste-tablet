import Menu1 from "../../components/Menu1"; // 1. Importação alterada de Navbar para Menu1
import SecaoPlanos from "./components/SecaoPlanos";
import Rodap from "./components/Rodap";
import { PLANOS_PARA_VOCE, PLANOS_PARA_EQUIPES } from "./data/planos";
import styles from "./PlanosComLogin.module.css";

const Planos = () => {
  return (
    <div className={styles.planos}>
      <Menu1 /> {/* 2. Componente alterado de <Navbar /> para <Menu1 /> */}

      {/* Imagens decorativas de fundo — topo */}
      <img
        className={styles.decoracaoFundoTopo}
        alt=""
        src="/merged-asset-1@2x.png"
      />
      <img
        className={styles.decoracaoLateralDireita}
        loading="lazy"
        alt=""
        src="/ChatGPT-Image-15-de-mai-de-2026-15-25-49-21@2x.png"
      />
      <img
        className={styles.decoracaoLateralEsquerda}
        loading="lazy"
        alt=""
        src="/ChatGPT-Image-15-de-mai-de-2026-15-25-49-1@2x.png"
      />

      <main className={styles.conteudo}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={styles.tituloHero}>
            <span>Escolha o </span>
            <span className={styles.destaque}>plano ideal</span>
            <span> para o seu momento</span>
          </h1>
          <p className={styles.subtituloHero}>
            Comece com o essencial e evolua conforme sua necessidade.
            <br />
            Sem complicação, com clareza e apoio quando você precisar
          </p>
        </section>

        {/* Seção: planos individuais */}
        <SecaoPlanos
          titulo="Para você"
          icone="/Paravoce.svg"
          planos={PLANOS_PARA_VOCE}
          colunas={1}
        />

        {/* Seção: planos para equipes */}
        <SecaoPlanos
          titulo="Para equipes"
          icone="/Paraequipes.svg"
          planos={PLANOS_PARA_EQUIPES}
          colunas={2}
        />
      </main>

      {/* Imagens decorativas de fundo — base */}
      <img
        className={styles.decoracaoBaseEsquerda}
        alt=""
        src="/ChatGPT-Image-15-de-mai-de-2026-15-25-49-1@2x.png"
      />
      
      <Rodap />
    </div>
  );
};

export default Planos;