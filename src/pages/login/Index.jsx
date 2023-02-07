import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { TextField } from "../../components/inputs/TextField";
import { White_Button } from "../../components/buttons/Buttons";

import styles from "./Index.module.scss";

import logo from "../../assets/svg/logo1.svg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";

import { useDispatch, useSelector } from "react-redux";
import { ActionLogin } from "../../redux/User/user.actions";
import { toast } from "react-hot-toast";
import GetText from "./login.lang";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //------ Language Getter
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);
  //------ Language Getter

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const succ = () => {
    navigate("/settings");
  };

  const handleSubmit = () => {
    dispatch(ActionLogin(user, succ));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <NavLink to="/home">
          <img className={styles.logo} src={logo} />
        </NavLink>
        <div className={styles.form}>
          <h3 className={styles.title}>{text.Sign_in}</h3>

          <TextField
            onChange={handle_change}
            type="text"
            name="email"
            value={user.email}
            placeholder={text.Email}
          />
          <TextField
            onChange={handle_change}
            type="password"
            name="password"
            value={user.password}
            className={styles.input}
            placeholder={text.Password}
          />

          <div className={styles.remeber}>
            <input type="checkbox" />
            <span>{text.Remember_me}</span>
          </div>
          <div className={styles.forget}>
            <NavLink to={"/forgot_password"}>
              {text.Forgot_your_password}
            </NavLink>
          </div>

          <White_Button onClick={handleSubmit}>{text.Login}</White_Button>

          <div className={styles.alt_login}>
            <h4>{text.Or_login_with}</h4>
            <div className={styles.icons}>
              <img src={google} alt="google" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>

          <p className={styles.register_link}>
            {text.dnt_hv_ac}{" "}
            <NavLink to={"/register"}>{text.Register_now}</NavLink>
          </p>
        </div>
      </div>
      <div className={styles.cover} />
    </div>
  );
};

export default Login;
