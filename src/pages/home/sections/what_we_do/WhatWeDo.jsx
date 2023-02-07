import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetText from "./what_we_do.lang";
import styles from "./what_we_do.module.scss";
import exemple from "../../../../assets/images/sec3.1.png";

function WhatWeDo() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <h2>{text.what_do_we_do}</h2>
        <p>
          {text.l1} <span /> {text.l2} <span />
          {text.l3} <span /> {text.l4} <span /> {text.l5}
        </p>
      </div>
      <img src={exemple} />
    </div>
  );
}

export default WhatWeDo;
