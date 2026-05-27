import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Menu1.module.css";
import { NavLink } from "react-router-dom";

const Menu1 = ({ className = "" }) => {
  return (
    <header className={`${styles.menu} ${className}`}>
      <div className={styles.logoArea}>
        <NavLink to="/" className={styles.logoArea}>
          <img className={styles.logoIcon} loading="lazy" alt="Logo JURIKI" src="/Logo-juriki-girassol-completo-2@2x.png" />
          <h1 className={styles.marcaNome}>JURIKI</h1>
        </NavLink>
      </div>

      <nav className={styles.navegacaoAbas}>
        <NavLink to="/ia"
          className={({ isActive }) => `${styles.linkMenu} ${isActive ? styles.linkMenuAtivo : ""}`}
        >
          IA Jurídica
        </NavLink>
        <NavLink to="/advogados"
          className={({ isActive }) => `${styles.linkMenu} ${isActive ? styles.linkMenuAtivo : ""}`}
        >
          Advogados
        </NavLink>
        <NavLink to="/processos"
          className={({ isActive }) => `${styles.linkMenu} ${isActive ? styles.linkMenuAtivo : ""}`}
        >
          Meus processos
        </NavLink>
      </nav>

      <div className={styles.perfilUsuarioArea}>
        <button className={styles.botaoAcaoIcon}>
          <img className={styles.iconNotificacao} alt="Notificações" src="/Vector.svg" />
        </button>
        <button className={styles.botaoAcaoIcon}>
          <img className={styles.iconConfig} alt="Configurações" src="/Vector1.svg" />
        </button>
        <span className={styles.divisorVertical} />
        <NavLink to="/perfil"
          className={({ isActive }) => `${styles.infoUsuario} ${isActive ? styles.linkMenuAtivo : ""}`}
        >
          <span className={styles.nomeUsuario}>Alice Silva</span>
          <div className={styles.avatarContainer}>
            <img className={styles.avatarFoto} loading="lazy" alt="Foto de perfil" src="/Avatar-Foto-Teste.png" />
          </div>
        </NavLink>
      </div>
    </header>
  );
};

Menu1.propTypes = {
  className: PropTypes.string,
};

export default Menu1;