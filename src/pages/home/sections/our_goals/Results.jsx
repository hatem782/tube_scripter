import React, { useEffect, useState } from "react";
import styles from "./results.module.scss";

import circles_img from "../../../../assets/svg/our_results/circles.svg";

import paste_text from "../../../../assets/svg/our_results/paste-text.svg";
import growth from "../../../../assets/svg/our_results/growth.svg";
import checks from "../../../../assets/svg/our_results/checks.svg";

import { useSelector } from "react-redux";
import GetText from "./our_goals.lang";

function Results() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <h1>{text.title}</h1>

      <div className={styles.circles}>
        <img
          src={circles_img}
          className={styles.circles_img}
          alt="Des millions de personnes deviennent de meilleurs écrivains"
        />
        <div className={styles.content}>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={paste_text} />
            </div>
            <h2>{text.exp1.title}</h2>
            <p>{text.exp1.parag}</p>
          </div>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={growth} />
            </div>
            <h2>{text.exp2.title}</h2>
            <p>{text.exp2.parag}</p>
          </div>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={checks} />
            </div>
            <h2>{text.exp3.title}</h2>
            <p>{text.exp3.parag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
