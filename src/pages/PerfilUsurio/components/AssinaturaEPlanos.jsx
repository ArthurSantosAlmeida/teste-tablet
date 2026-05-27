import PropTypes from "prop-types";
import styles from "./AssinaturaEPlanos.module.css";

const AssinaturaEPlanos = ({ className = "" }) => {
  return (
    <section className={[styles.assinaturaEPlanos, className].join(" ")}>
      <h2 className={styles.assinaturaEPlanos2}>Assinatura e planos</h2>
      <div className={styles.juncaBtn}>
        <div className={styles.coroa}>
          <img
            className={styles.iconeCoroa}
            loading="lazy"
            alt=""
            src="/icone-coroa@2x.png"
          />
          <div className={styles.planoGratuito}>
            <h3 className={styles.planoGratuito2}>Plano Gratuito</h3>
            <div className={styles.vocPossuAcesso}>
              Você possuí acesso às funcionalidades básicas da plataforma
            </div>
            <div className={styles.risco}>
              <div className={styles.verDetalhesDo}>Ver detalhes do plano</div>
            </div>
          </div>
        </div>
        <div className={styles.btnVerPlanos}>
          <div className={styles.verPlanosGratuitos}>Ver planos gratuitos</div>
        </div>
      </div>
    </section>
  );
};

AssinaturaEPlanos.propTypes = {
  className: PropTypes.string,
};

export default AssinaturaEPlanos;
