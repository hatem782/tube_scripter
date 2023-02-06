import React from "react";
import styles from "./bibleo.module.scss";

import youtube from "../../assets/svg/script/youtube.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import { NavLink } from "react-router-dom";

const Bibleotheque = () => {
  return (
    <div className={styles.main}>
      <h1>Bibliothèque</h1>
      <div className={styles.bibleo}>
        <h2>
          <NavLink to="/script"> Nouvelle </NavLink>{" "}
        </h2>
        <div className={styles.cards}>
          <Card
            type="yt"
            description={`Des descriptions YouTube accrocheuses et convaincantes qui permettent
          de mieux classer vo vidéos`}
          />
          <Card
            type="vs"
            description={`Des descriptions YouTube accrocheuses et convaincantes qui permettent
          de mieux classer vo vidéos`}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ type = "yt", description }) => {
  const scripter = scripts_types.find((st) => st.value === type);

  return (
    <div className={styles.card}>
      <div className={styles.img_type}>
        <img src={scripter.img} alt={scripter.title} />
      </div>
      <h3>{scripter.title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Bibleotheque;

const scripts_types = [
  {
    img: youtube,
    title: "YouTube Scripter",
    value: "yt",
  },
  {
    img: video_scripter,
    title: "Tiktok Scripter",
    value: "vs",
  },
];
