import React, { useState } from "react";

import styles from "./footer.module.scss";
import logo from "../../assets/svg/footer/logo.svg";
import { NavLink } from "react-router-dom";

import FrFlag from "../../assets/svg/footer/fr.png";
import EnFlag from "../../assets/svg/footer/en.png";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.topside}>
        <img className={styles.logo} src={logo} alt="tupe scripter" />
        <div className={styles.content}>
          <div className={styles.links}>
            <div className={styles.group}>
              <h2>Information</h2>
              <span>Accueil</span>
              <span>A propos</span>
              <span>Mentions légales</span>
            </div>

            <div className={styles.group}>
              <h2>A propos</h2>
              <span>Qui sommes-nous</span>
              <span>Politique de confidentialité</span>
              <span>Condition d'utilisation</span>
            </div>

            <div className={styles.group}>
              <h2>Fonctionnement</h2>
              <span>YouTube shorts </span>
              <span>Reels</span>
              <span>Tiktoks</span>
            </div>
          </div>

          <div className={styles.external_links}>
            <div className={styles.externals}>
              <h2>RETROUVEZ-NOUS SUR</h2>
              <div className={styles.rxs}>
                <NavLink to="/" className={styles.rx}>
                  <FaLinkedinIn />
                </NavLink>
                <NavLink to="/" className={styles.rx}>
                  <FaInstagram />
                </NavLink>
                <NavLink to="/" className={styles.rx}>
                  <FaTwitter />
                </NavLink>
                <NavLink to="/" className={styles.rx}>
                  <FaFacebookF />
                </NavLink>
                <NavLink to="/" className={styles.rx}>
                  <FaYoutube />
                </NavLink>
                <NavLink to="/" className={styles.rx}>
                  <FaTiktok />
                </NavLink>
              </div>
            </div>

            <div className={styles.lang}>
              <LangSelect />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>
          © Copyright 2022-2023 TubeScripter Limited Tous les droits sont
          réservés | Réalisé par Shangoubaan
        </p>
      </div>
    </div>
  );
}

const LangSelect = () => {
  const [lang, setLang] = useState("Fr");

  const handle_change = (event) => {
    console.log(event.target.value);
    setLang(event.target.value);
  };

  return (
    <div className={styles.select_lang}>
      <img src={lang === "Fr" ? FrFlag : EnFlag} />
      <select
        value={lang}
        onChange={handle_change}
        placeholder="select language"
      >
        <option value="Fr">Français - FR </option>
        <option value="En"> English - EN</option>
      </select>
    </div>
  );
};

export default Footer;
