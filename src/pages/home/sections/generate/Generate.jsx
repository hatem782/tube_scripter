import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetText from "./generate.lang";

import styles from "./generate.module.scss";

import exemple from "../../../../assets/images/sec2.3.png";
import { Red_Button2 } from "../../../../components/buttons/Buttons";

function Generate() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <h1>{text.GENERATED_YOUR_FIRST_SCRIPT}</h1>
        <p>{text.try_tubescripter}</p>
        <Red_Button2>{text.How_it_works}</Red_Button2>
      </div>
      <div className={styles.image}>
        <img src={exemple} alt="GÉNÉRÉ VOTRE PREMIER SCRIPT" />
      </div>
    </div>
  );
}

export default Generate;
