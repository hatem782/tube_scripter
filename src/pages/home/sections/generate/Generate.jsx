import React from "react";

import styles from "./generate.module.scss";

import exemple from "../../../../assets/images/sec2.3.png";
import { Red_Button2 } from "../../../../components/buttons/Buttons";

function Generate() {
  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <h1>GÉNÉRÉ VOTRE PREMIER SCRIPT</h1>
        <p>Essayer Tube Scripter gratuitement en quelques clique</p>
        <Red_Button2>Comment ça fonctionne</Red_Button2>
      </div>
      <div className={styles.image}>
        <img src={exemple} alt="GÉNÉRÉ VOTRE PREMIER SCRIPT" />
      </div>
    </div>
  );
}

export default Generate;
