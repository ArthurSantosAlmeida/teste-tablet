import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { LINKS_NAV_INTERNA } from "../data/processos";
import styles from "./NavbarInterna.module.css";

/**
 * Navbar interna do app — substitui Menu1.
 *
 * Mudanças em relação ao original:
 * - Removidos os props de estilo inline (menuPosition, menuTop, menuLeft…)
 *   que eram anti-pattern: posicionamento é responsabilidade do CSS.
 * - Links de nav gerados a partir de LINKS_NAV_INTERNA (data/processos.js).
 * - Nome semântico: NavbarInterna em vez de Menu1.
 */
const NavbarInterna = ({ className = "", onNavClick }) => {
  const navigate = useNavigate();

  const handleLinkClick = useCallback(
    (rota) => {
      if (onNavClick) onNavClick(rota);
      if (rota) navigate(rota);
    },
    [navigate, onNavClick]
  );

  return (
    <header className={[styles.navbar, className].join(" ")}>
      {/* Logo */}
      <div className={styles.logoEJuriki}>
        <img
          className={styles.logo}
          loading="lazy"
          alt="Logo Juriki"
          src="/Logo-juriki-girassol-completo-2@2x.png"
        />
        <div className={styles.logoTexto}>
          <h2 className={styles.juriki}>JURIKI</h2>
          <span className={styles.slogan}>A justiça que fala a sua língua</span>
        </div>
      </div>

      {/* Links de navegação */}
      <nav className={styles.abas}>
        {LINKS_NAV_INTERNA.map(({ id, label, rota }) => (
          <h3
            key={id}
            className={rota ? styles.linkAtivo : styles.link}
            onClick={() => handleLinkClick(rota)}
            role={rota ? "button" : undefined}
            tabIndex={rota ? 0 : undefined}
          >
            {label}
          </h3>
        ))}
      </nav>

      {/* Área do perfil */}
      <div className={styles.perfil}>
        <img className={styles.profileIcons} alt="Notificações" src="/Profile-Icons.svg" />
        <img className={styles.profileIcons2} alt="Configurações" src="/Profile-Icons1.svg" />
        <div className={styles.divisor} />
        <img className={styles.avatar} alt="Foto do usuário" src="/user.svg" />
        <h3 className={styles.nomeUsuario}>Alice Silva</h3>
        <img className={styles.setaUsuario} alt="" src="/Vector.svg" />
      </div>
    </header>
  );
};

NavbarInterna.propTypes = {
  className: PropTypes.string,
  onNavClick: PropTypes.func,
};

export default NavbarInterna;
