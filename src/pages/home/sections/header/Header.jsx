import React from "react";

import styles from "./header.module.scss";
import logo from "../../../../assets/svg/logo1.svg";
import { Red_Button } from "../../../../components/buttons/Buttons";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.top_bar}>
        <img className={styles.logo} src={logo} alt="Tube Scripter" />
        <div className={styles.nav_bar}>
          <a>Démos</a>
          <a>Créer un script </a>
          <a>Tarifs</a>
          <Red_Button>Obtenir Premium</Red_Button>
        </div>
      </div>

      <div className={styles.body}>
        <h1>ECRIVEZ</h1>
        <h2>LES LEILLEURS SCRIPTS</h2>
        <p>
          YOUTUBE <span>10X</span>
          <br />
          PLUS RAPIDEMENT.
        </p>
      </div>
    </div>
  );
}

export default Header;
