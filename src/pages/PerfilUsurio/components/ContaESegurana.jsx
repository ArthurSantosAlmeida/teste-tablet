import PropTypes from "prop-types";
import styles from "./ContaESegurana.module.css";

const ContaESegurana = ({ className = "" }) => {
  return (
    <footer className={[styles.contaESegurana, className].join(" ")}>
      <h2 className={styles.contaESegurana2}>Conta e segurança</h2>
      <div className={styles.opcoes}>
        <div className={styles.opcao1}>
          <div className={styles.cadeado}>
            <img
              className={styles.boxiconslock}
              alt=""
              src="/boxicons-lock.svg"
            />
            <div className={styles.alterarSenha}>
              <h3 className={styles.eMailCadastrado}>Alterar Senha</h3>
              <div className={styles.altereSuaSenha}>
                Altere sua senha de acesso à plataforma
              </div>
            </div>
          </div>
          <div className={styles.optionDivider} />
          <div className={styles.letter}>
            <img
              className={styles.boxiconslock}
              alt=""
              src="/ic-outline-email.svg"
            />
            <div className={styles.alterarSenha}>
              <h3 className={styles.eMailCadastrado}>E-mail cadastrado</h3>
              <div className={styles.alicesilvagmailcom}>
                Alice.silva@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className={styles.opcao2}>
          <div className={styles.logout}>
            <img className={styles.boxiconslock} alt="" src="/mdi-logout.svg" />
            <div className={styles.sair}>
              <h3 className={styles.eMailCadastrado}>Sair da conta</h3>
              <div className={styles.altereSuaSenha}>
                Encerrar sessão na plataforma
              </div>
            </div>
          </div>
          <div className={styles.opcao2Child} />
          <div className={styles.lixeira}>
            <img
              className={styles.gravityUitrashBinIcon}
              alt=""
              src="/gravity-ui-trash-bin.svg"
            />
            <div className={styles.alterarSenha}>
              <h3 className={styles.eMailCadastrado}>Excluir conta</h3>
              <div className={styles.altereSuaSenha}>
                Esta ação não pode ser desfeita
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

ContaESegurana.propTypes = {
  className: PropTypes.string,
};

export default ContaESegurana;
