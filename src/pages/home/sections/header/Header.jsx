import React, { useEffect, useState } from "react";

import styles from "./header.module.scss";
import logo from "../../../../assets/svg/logo1.svg";
import { Red_Button } from "../../../../components/buttons/Buttons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GetText from "./header.lang";

function Header() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const user = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();

  const [text, setText] = useState(GetText(lang));

  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  const go_dash_or_login = () => {
    navigate(user.is_connected ? "/settings" : "/login");
  };

  return (
    <div className={styles.main}>
      <div className={styles.top_bar}>
        <img className={styles.logo} src={logo} alt="Tube Scripter" />
        <div className={styles.nav_bar}>
          <NavLink to="/home">{text.Demos}</NavLink>
          <NavLink to="/login">{text.Create_a_script}</NavLink>
          <a>{text.Prices}</a>
          <Red_Button onClick={go_dash_or_login}>
            {user.is_connected ? text.To_Profile : text.Get_Premium}
          </Red_Button>
        </div>
      </div>

      <div className={styles.body}>
        <h1>{text.WRITE}</h1>
        <h2>{text.THE_BEST_SCRIPTS}</h2>
        <p>
          YOUTUBE <span>10X</span>
          <br />
          {text.FASTER}
        </p>
      </div>
    </div>
  );
}

export default Header;
