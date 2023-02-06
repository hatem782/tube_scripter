import React, { useState, useEffect } from "react";

import { TextField } from "../../components/inputs/TextField";
import { White_Button } from "../../components/buttons/Buttons";
import { NavLink } from "react-router-dom";

import styles from "./Index.module.scss";

import logo from "../../assets/svg/logo1.svg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";

const Register = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <NavLink to="/home">
          <img className={styles.logo} src={logo} />
        </NavLink>
        <div className={styles.form}>
          <h3 className={styles.title}>Create an account</h3>

          <TextField type="text" placeholder="First name" />
          <TextField type="text" placeholder="Last name" />
          <TextField type="text" placeholder="Email" />
          <div className={styles.grid2}>
            <TextField type="password" placeholder="Password" />
            <TextField type="password" placeholder="confirm Password" />
          </div>

          <White_Button onClick={() => {}}>Create an account</White_Button>

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
