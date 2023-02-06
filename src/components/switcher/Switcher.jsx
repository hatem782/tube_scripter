import React, { useState, useEffect } from "react";

import styles from "./switcher.module.scss";

function Switcher({ value = false }) {
  const [active, setAcitve] = useState(false);
  useEffect(() => {
    setAcitve(value);
  }, []);

  const handle_change = () => {
    setAcitve(!active);
  };

  return (
    <div
      onClick={handle_change}
      className={`${styles.switcher} ${active ? styles.active : ""} `}
    >
      <span />
    </div>
  );
}

export default Switcher;
