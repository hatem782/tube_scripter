import React, { useState } from "react";

import styles from "./dashnav.module.scss";

import logo from "../../assets/svg/navbar/logo.svg";
import select_arrow from "../../assets/svg/navbar/select_.svg";
import setting from "../../assets/svg/navbar/setting.svg";
import sign_out from "../../assets/svg/navbar/sign-out.svg";
import user_img from "../../assets/images/user2.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Disconnect } from "../../redux/User/user.actions";

function DashNav() {
  return (
    <div className={styles.main}>
      <NavLink to="/home">
        <img src={logo} className={styles.logo} alt="tube scripter" />
      </NavLink>
      <div className={styles.content}>
        <span className={styles.link}>
          <NavLink to="/home">Accueil</NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/script"> Scripte </NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/bibleo"> Bibleothéque </NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/contact"> Contact </NavLink>
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.UserReducer?.user);

  const handleOpen = () => {
    setOpen(!open);
  };

  const disconnect = () => {
    navigate("/home");
    dispatch(Disconnect());
  };

  return (
    <div className={styles.select}>
      <div className={styles.showed} onClick={handleOpen}>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <img src={select_arrow} />
      </div>
      {open && (
        <div className={styles.hidden}>
          <NavLink to="/settings">
            <div className={styles.item}>
              <img src={setting} alt="settings" /> <span>Paramétre</span>
            </div>
          </NavLink>
          <div onClick={disconnect} className={styles.item}>
            <img src={sign_out} alt="Déconnection" /> <span>Déconnection</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashNav;
