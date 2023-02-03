import React from "react";
import styles from "./styles.module.scss";

function Buttons({ children, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}

export default Buttons;
