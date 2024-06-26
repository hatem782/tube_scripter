import React from "react";
import styles from "./buttons.module.scss";

import play_img from "../../assets/svg/play.svg";
import { useNavigate } from "react-router-dom";

import { CgSpinner } from "react-icons/cg";

export function White_Button({ children, onClick }) {
  return (
    <button className={styles.white_button} onClick={onClick}>
      {children}
    </button>
  );
}

export function Red_Button({
  children,
  onClick,
  loading = false,
  init_bloc = false,
}) {
  return (
    <button
      disabled={loading || init_bloc}
      className={`
      ${styles.red_button} 
      ${init_bloc ? styles.initial_blocked : ""}`}
      onClick={onClick}
    >
      {loading ? (
        <>
          <CgSpinner className={styles.spinner} /> Loading
        </>
      ) : (
        children
      )}
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

export function Red_Button3({ children, onClick }) {
  let navigator = useNavigate();

  return (
    <button
      className={styles.red_button3}
      onClick={(e) => navigator("/script")}
    >
      {children}
    </button>
  );
}
