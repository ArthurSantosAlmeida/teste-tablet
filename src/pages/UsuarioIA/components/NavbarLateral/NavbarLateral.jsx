import NovoChat from "./NovoChat";
import Documentos from "./Documentos";
import Planos from "./Planos";
import ConversasRecentes from "./ConversasRecentes";
import PropTypes from "prop-types";
import styles from "./NavbarLateral.module.css";

const NavbarLateral = ({ className = "" }) => {
  // Lista centralizada e limpa de conversas recentes para simular o banco de dados
  const conversas = [
    { id: 1, titulo: "Direitos trabalhistas" },
    { id: 2, titulo: "Contrato de aluguel" },
    { id: 3, titulo: "Dúvida societária" },
    { id: 4, titulo: "Aposentadoria INSS" },
    { id: 5, titulo: "Consumidor e aviação" },
    { id: 6, titulo: "Revisão de contrato" },
  ];

  return (
    <aside className={`${styles.navbarLateral} ${className}`}>
      <div className={styles.containerLargura}>
        <NovoChat onClick={() => console.log("Novo Chat iniciado")} />
      </div>

      <div className={styles.abasIa}>
        <Documentos onClick={() => console.log("Acessou Documentos")} />
        <Planos onClick={() => console.log("Acessou Planos")} />
      </div>

      <div className={styles.histricoDeChat}>
        <div className={styles.textoConversasRecentes}>
          <span className={styles.conversasRecentesTitulo}>CONVERSAS RECENTES</span>
        </div>
        
        <div className={styles.listaConversas}>
          {conversas.map((chat) => (
            <ConversasRecentes 
              key={chat.id} 
              titulo={chat.titulo} 
              onClick={() => console.log(`Abrindo chat: ${chat.id}`)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

NavbarLateral.propTypes = {
  className: PropTypes.string,
};

export default NavbarLateral;