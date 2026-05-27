import Menu1 from "../../components/Menu1";
import MeuPerfil from "./components/MeuPerfil";
import Pessoal from "./components/Pessoal";
import ResumoDaConta from "./components/ResumoDaConta";
import AssinaturaEPlanos from "./components/AssinaturaEPlanos";
import ContaESegurana from "./components/ContaESegurana";
import styles from "./PerfilUsurio.module.css";

const PerfilUsurio = () => {
  return (
    <div className={styles.perfilUsurio}>
      <Menu1 />
      <main className={styles.meuPerfil}>
        <MeuPerfil />
        <Pessoal />
        <ResumoDaConta />
        <AssinaturaEPlanos />
        <ContaESegurana />
      </main>
    </div>
  );
};

export default PerfilUsurio;
