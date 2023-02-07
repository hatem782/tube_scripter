import React, { useState, useEffect } from "react";

import { TextField } from "../../components/inputs/TextField";
import { White_Button } from "../../components/buttons/Buttons";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Index.module.scss";

import logo from "../../assets/svg/logo1.svg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";

import { useDispatch, useSelector } from "react-redux";
import { ActionRegister } from "../../redux/User/user.actions";
import { toast } from "react-hot-toast";
import GetText from "./register.lang";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conf_password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  const succ = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    if (user.conf_password !== user.password) {
      toast.error(text.tast_error1);
      return;
    }
    dispatch(ActionRegister(user, succ));
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
          <h3 className={styles.title}>{text.Create_an_account}</h3>

          <TextField
            onChange={handle_change}
            type="text"
            name="firstName"
            value={user.firstName}
            placeholder={text.First_name}
          />
          <TextField
            onChange={handle_change}
            type="text"
            name="lastName"
            value={user.lastName}
            placeholder={text.Last_name}
          />
          <TextField
            onChange={handle_change}
            type="text"
            name="email"
            value={user.email}
            placeholder={text.Email}
          />
          <div className={styles.grid2}>
            <TextField
              onChange={handle_change}
              type="password"
              name="password"
              value={user.password}
              className={styles.input}
              placeholder={text.Password}
            />
            <TextField
              onChange={handle_change}
              type="password"
              name="conf_password"
              value={user.conf_password}
              className={styles.input}
              placeholder={text.Confirm_Password}
            />
          </div>

          <White_Button onClick={handleSubmit}>
            {text.Create_an_account}
          </White_Button>

          <div className={styles.alt_login}>
            <h4>{text.Or_login_with}</h4>
            <div className={styles.icons}>
              <img src={google} alt="google" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>

          <p className={styles.register_link}>
            {text.have_an_account}
            <NavLink to={"/login"}>{text.Login_now}</NavLink>
          </p>
        </div>
      </div>
      <div className={styles.cover} />
    </div>
  );
};

export default Register;
