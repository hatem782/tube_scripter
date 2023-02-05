import React from "react";
import styles from "./stats.module.scss";

import top_fig from "../../../../assets/svg/stats/top_fig.svg";
import bot_fig from "../../../../assets/svg/stats/bot_fig-svg.svg";

import circle_50 from "../../../../assets/svg/stats/circle_50.png";
import circle_75 from "../../../../assets/svg/stats/circle_75.png";
import circle_100 from "../../../../assets/svg/stats/circle_100.png";

function Stats() {
  return (
    <div className={styles.main}>
      <img className={styles.top_fig} src={top_fig} />
      <img className={styles.bot_fig} src={bot_fig} />
      <h1>Des millions de personnes deviennent de meilleurs écrivains</h1>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_50} />
            <div className={styles.data}>
              <h2>75%</h2>
              <span>Temps gagné</span>
            </div>
          </div>
          <p>Des millions de personnes font confiance au gain de temps</p>
        </div>

        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_75} />
            <div className={styles.data}>
              <h2>50+</h2>
              <span>Million</span>
            </div>
          </div>
          <p>Des millions de personnes font confiance au gain de temps</p>
        </div>

        <div className={styles.stat}>
          <div className={styles.img_cont}>
            <img src={circle_100} />
            <div className={styles.data}>
              <h2>125</h2>
              <span>Mots</span>
            </div>
          </div>
          <p>Des millions de personnes font confiance au gain de temps</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
