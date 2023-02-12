import React from "react";
import styles from "./bibleo.module.scss";

import youtube from "../../assets/svg/script/youtube.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import { NavLink, useNavigate } from "react-router-dom";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

const Bibleotheque = () => {
  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <h1>Bibliothèque</h1>
        <div className={styles.bibleo}>
          <div className={styles.textSize}>
            <h2>
              Créer votre prochain script
            </h2>
          </div>
          <div className={styles.cards}>
            <Card
              type="yt"
              description={`Des descriptions Vidéo accrocheuses et convaincantes qui permettent
              de mieux classer vos vidéos`}
        
            />
            <Card
              type="vs"
              description={`Des descriptions Vidéo accrocheuses et convaincantes qui permettent
              de mieux classer vos vidéos`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ type = "yt", description }) => {
  const scripter = scripts_types.find((st) => st.value === type);
  let navigate = useNavigate()
  return (
    <div className={styles.card} onClick={e => navigate('/script')}>
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
    title: "Scripter Long Format",
    value: "yt",
  },
  {
    img: video_scripter,
    title: "Scripter Short Format",
    value: "vs",
  },
];
