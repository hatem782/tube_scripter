import React from "react";
import styles from "./results.module.scss";

import circles_img from "../../../../assets/svg/our_results/circles.svg";

import paste_text from "../../../../assets/svg/our_results/paste-text.svg";
import growth from "../../../../assets/svg/our_results/growth.svg";
import checks from "../../../../assets/svg/our_results/checks.svg";

function Results() {
  return (
    <div className={styles.main}>
      <h1>Des millions de personnes deviennent de meilleurs écrivains</h1>

      <div className={styles.circles}>
        <img
          src={circles_img}
          alt="Des millions de personnes deviennent de meilleurs écrivains"
        />
        <div className={styles.content}>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={paste_text} />
            </div>
            <h2>Coller le texte</h2>
            <p>
              Tube Scripter est un générateur de scripts spécialisé dans les
              vidéos YouTube .Cet outil est conçu pour être utilizer sur
              n'importe quelle thèmes de vidéos.
            </p>
          </div>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={growth} />
            </div>
            <h2>Commencer la réécriture</h2>
            <p>
              Tube Scripter est un générateur de scripts spécialisé dans les
              vidéos YouTube .Cet outil est conçu pour être utilizer sur
              n'importe quelle thèmes de vidéos.
            </p>
          </div>
          <div className={styles.elem}>
            <div className={styles.img_cont}>
              <img src={checks} />
            </div>
            <h2>Travail effectué</h2>
            <p>
              Tube Scripter est un générateur de scripts spécialisé dans les
              vidéos YouTube .Cet outil est conçu pour être utilizer sur
              n'importe quelle thèmes de vidéos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
