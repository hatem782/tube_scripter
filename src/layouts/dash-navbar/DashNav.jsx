import React, { useEffect, useState } from "react";
import GetText from "./dashnav.lang";

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
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <NavLink to="/home">
        <img src={logo} className={styles.logo} alt="tube scripter" />
      </NavLink>
      <div className={styles.content}>
        <span className={styles.link}>
          <NavLink to="/home">{text.home}</NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/script"> {text.Script} </NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/chatgpt"> {text.ChatGpt} </NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/bibleo"> {text.Library} </NavLink>
        </span>
        <span className={styles.link}>
          <NavLink to="/contact"> {text.Contact} </NavLink>
        </span>
        <span className={styles.separator} />
        <img className={styles.user_img} src={user_img} alt="user" />
        <Select text={text} />
      </div>
    </div>
  );
}

const Select = ({ text }) => {
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
              <img src={setting} alt="settings" /> <span>{text.Setting}</span>
            </div>
          </NavLink>
          <div onClick={disconnect} className={styles.item}>
            <img src={sign_out} alt="Déconnection" /> <span>{text.Logout}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashNav;
