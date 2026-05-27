import PropTypes from "prop-types";
import styles from "./Pessoal.module.css";

const Pessoal = ({ className = "" }) => {
  return (
    <section className={[styles.pessoal, className].join(" ")}>
      <img
        className={styles.fotoIcon}
        loading="lazy"
        alt=""
        src="/Foto@2x.png"
      />
      <div className={styles.informacoesGerais}>
        <h2 className={styles.aliceSilva}>Alice silva</h2>
        <div className={styles.informaes}>
          <div className={styles.alicesilvagmailcom}>Alice.silva@gmail.com</div>
          <div className={styles.telefoneUsuario}>
            <img
              className={styles.solarphoneOutlineIcon}
              alt=""
              src="/solar-phone-outline.svg"
            />
            <div className={styles.memberInfo}>(11) 91234-5678</div>
          </div>
          <div className={styles.calendarioMembro}>
            <img
              className={styles.solarphoneOutlineIcon}
              alt=""
              src="/mdi-light-calendar.svg"
            />
            <div className={styles.memberInfo}>
              Membro desde de julho de 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Pessoal.propTypes = {
  className: PropTypes.string,
};

export default Pessoal;
