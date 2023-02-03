import React from "react";
import styles from "./serv_card.module.scss";

function ServCard({ img, title, description }) {
  return (
    <div className={`${styles.serv_card} card`}>
      <div className={styles.img_cont}>
        <img src={img} alt="" />
      </div>
      <div className={styles.desc}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServCard;
