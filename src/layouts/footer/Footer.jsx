import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GetText from "./footer.lang";

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
import { ChangeLang } from "../../redux/lang/lang.actions";

function Footer() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <div className={styles.topside}>
        <img className={styles.logo} src={logo} alt="tupe scripter" />
        <div className={styles.content}>
          <div className={styles.links}>
            <div className={styles.group}>
              <h2>{text.Information}</h2>
              <span>{text.home}</span>
              <span>{text.about_us}</span>
              <span>{text.Legal_Notice}</span>
            </div>

            <div className={styles.group}>
              <h2>{text.about_us}</h2>
              <span>{text.Who_are_we}</span>
              <span>{text.Privacy_Policy}</span>
              <span>{text.Terms_of_use}</span>
            </div>

            <div className={styles.group}>
              <h2>{text.Functioning}</h2>
              <span>{text.youtube_shorts}</span>
              <span>{text.Reels}</span>
              <span>{text.Tiktoks}</span>
            </div>
          </div>

          <div className={styles.external_links}>
            <div className={styles.lang}>
              <LangSelect text={text} initial_lang={lang} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>{text.copy_rights}</p>
      </div>
    </div>
  );
}

const LangSelect = ({ text, initial_lang }) => {
  const [lang, setLang] = useState("fr");
  const dispatch = useDispatch();

  useEffect(() => {
    setLang(initial_lang);
  }, [initial_lang]);

  const handle_change = (event) => {
    setLang(event.target.value);
    dispatch(ChangeLang(event.target.value));
  };

  return (
    <div className={styles.select_lang}>
      <img src={lang === "fr" ? FrFlag : EnFlag} />
      <select
        value={lang}
        onChange={handle_change}
        placeholder="select language"
      >
        <option value="fr">{text.french} - FR </option>
        <option value="en"> {text.english} - EN</option>
      </select>
    </div>
  );
};

export default Footer;
