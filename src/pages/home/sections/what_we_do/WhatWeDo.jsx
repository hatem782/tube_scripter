import React from "react";
import styles from "./what_we_do.module.scss";
import exemple from "../../../../assets/images/sec3.1.png";

function WhatWeDo() {
  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <h2>QUE FAISONS NOUS ?</h2>
        <p>
          Tube Scripter est un générateur de <span /> scripts spécialisédans les
          vidéos <span />
          YouTube.Cet outil est conçu pour <span /> être utilizer sur n'importe
          quelle <span />
          thèmes de vidéo
        </p>
      </div>
      <img src={exemple} />
    </div>
  );
}

export default WhatWeDo;
