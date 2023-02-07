import React, { useState } from "react";

import { TextField } from "../../components/inputs/TextField";
import { White_Button } from "../../components/buttons/Buttons";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Index.module.scss";

import logo from "../../assets/svg/logo1.svg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";

import { useDispatch } from "react-redux";
import { ActionRegister } from "../../redux/User/user.actions";
import { toast } from "react-hot-toast";

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

  const succ = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    if (user.conf_password !== user.password) {
      toast.error("passwords are not matching !");
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
          <h3 className={styles.title}>Create an account</h3>

          <TextField
            onChange={handle_change}
            type="text"
            name="firstName"
            value={user.firstName}
            placeholder="First name"
          />
          <TextField
            onChange={handle_change}
            type="text"
            name="lastName"
            value={user.lastName}
            placeholder="Last name"
          />
          <TextField
            onChange={handle_change}
            type="text"
            name="email"
            value={user.email}
            placeholder="Email"
          />
          <div className={styles.grid2}>
            <TextField
              onChange={handle_change}
              type="password"
              name="password"
              value={user.password}
              className={styles.input}
              placeholder="Password"
            />
            <TextField
              onChange={handle_change}
              type="password"
              name="conf_password"
              value={user.conf_password}
              className={styles.input}
              placeholder="confirm Password"
            />
          </div>

          <White_Button onClick={handleSubmit}>Create an account</White_Button>

          <div className={styles.alt_login}>
            <h4> Or login with </h4>
            <div className={styles.icons}>
              <img src={google} alt="google" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>

          <p className={styles.register_link}>
            have an account ? <NavLink to={"/login"}> Login now </NavLink>
          </p>
        </div>
      </div>
      <div className={styles.cover} />
    </div>
  );
};

export default Register;
