import React, { useState } from "react";

import styles from "./dashnav.module.scss";

import logo from "../../assets/svg/navbar/logo.svg";
import select_arrow from "../../assets/svg/navbar/select_.svg";
import setting from "../../assets/svg/navbar/setting.svg";
import sign_out from "../../assets/svg/navbar/sign-out.svg";
import user_img from "../../assets/images/user2.png";
import { NavLink } from "react-router-dom";

function DashNav() {
  return (
    <div className={styles.main}>
      <img src={logo} className={styles.logo} alt="tube scripter" />
      <div className={styles.content}>
        <span className={styles.link}>
          <NavLink to="/home">Accueil</NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/home"> Scripte </NavLink>
        </span>
        <span className={styles.separator} />
        <img className={styles.user_img} src={user_img} alt="user" />
        <Select />
      </div>
    </div>
  );
}

const Select = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const Deconnection = () => {};

  return (
    <div className={styles.select}>
      <div className={styles.showed} onClick={handleOpen}>
        <span>Amanie s.</span> <img src={select_arrow} />
      </div>
      {open && (
        <div className={styles.hidden}>
          <NavLink to="/profile">
            <div className={styles.item}>
              <img src={setting} alt="settings" /> <span>Paramétre</span>
            </div>
          </NavLink>
          <div onClick={Deconnection} className={styles.item}>
            <img src={sign_out} alt="Déconnection" /> <span>Déconnection</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashNav;
