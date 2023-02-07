import React from "react";
import styles from "./buttons.module.scss";

import play_img from "../../assets/svg/play.svg";

export function White_Button({ children, onClick }) {
  return (
    <button className={styles.white_button} onClick={onClick}>
      {children}
    </button>
  );
}

export function Red_Button({ children, onClick, loading = false }) {
  return (
    <button disabled={loading} className={styles.red_button} onClick={onClick}>
      {loading ? "Loading..." : children}
    </button>
  );
}

export function Red_Button2({ children, onClick }) {
  return (
    <button className={styles.red_button2} onClick={onClick}>
      <img src={play_img} alt="play" />
      {children}
    </button>
  );
}
