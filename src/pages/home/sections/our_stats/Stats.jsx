import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetText from "./stats.lang";
import styles from "./stats.module.scss";

import top_fig from "../../../../assets/svg/stats/top_fig.svg";
import bot_fig from "../../../../assets/svg/stats/bot_fig-svg.svg";

import circle_50 from "../../../../assets/svg/stats/circle_50.png";
import circle_75 from "../../../../assets/svg/stats/circle_75.png";
import circle_100 from "../../../../assets/svg/stats/circle_100.png";
import { Red_Button3 } from "../../../../components/buttons/Buttons";

function Stats() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <img className={styles.top_fig} src={top_fig} />
      <img className={styles.bot_fig} src={bot_fig} />
      <h1>{text.title}</h1>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_50} />
            <div className={styles.data}>
              <h2>3521h</h2>
              <span>{text.circle1.title}</span>
            </div>
          </div>
          <p>{text.circle1.parag}</p>
        </div>

        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_75} />
            <div className={styles.data}>
              <h2>15K+</h2>
              <span>{text.circle2.title}</span>
            </div>
          </div>
          <p>{text.circle2.parag}</p>
        </div>

        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_100} />
            <div className={styles.data}>
              <h2>65M</h2>
              <span>{text.circle3.title}</span>
            </div>
          </div>
          <p>{text.circle3.parag}</p>
        </div>
      </div>
      <div className={styles.btnSec}>
        <Red_Button3>{text.click}</Red_Button3>
      </div>
    </div>
  );
}

export default Stats;
