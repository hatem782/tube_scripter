import React, { useState } from "react";

import styles from "./styles.module.scss";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export function TextField(props) {
  const {
    placeholder,
    name,
    value,
    type = "text",
    onChange,
    isLabeled = false,
    label,
    className = "",
  } = props;

  const [show, setShow] = useState(false);
  const is_pass = type === "password";

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`${styles.text_field} ${className}`}>
      {isLabeled && (
        <label>
          <span className={styles.title}>
            {label}
            <span className={styles.red}>{" * "}</span>
          </span>
          <span className={styles.nb_letters}>0/200</span>
        </label>
      )}
      <div className={styles.input}>
        <input
          type={is_pass ? (show ? "text" : "password") : "text"}
          placeholder={placeholder}
        />
        {is_pass &&
          (show ? (
            <FaEyeSlash className={styles.icon} onClick={handleShow} />
          ) : (
            <FaEye className={styles.icon} onClick={handleShow} />
          ))}
      </div>
    </div>
  );
}

export default TextField;
