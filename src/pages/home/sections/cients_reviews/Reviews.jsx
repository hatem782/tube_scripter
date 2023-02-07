import React, { useEffect, useState } from "react";
import styles from "./reviews.module.scss";

import figure_img from "../../../../assets/svg/reviews/figure.png";
import prev_img from "../../../../assets/svg/reviews/prev.svg";
import next_img from "../../../../assets/svg/reviews/next.svg";

import red_mess from "../../../../assets/svg/reviews/red_mess.svg";
import black_mess from "../../../../assets/svg/reviews/black_mess.svg";
import star from "../../../../assets/svg/reviews/star.svg";

import user_img from "../../../../assets/images/user1.png";

import { useSelector } from "react-redux";
import GetText from "./reviews.lang";

function Reviews() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <img className={styles.fig} src={figure_img} />
      <h1>
        {text.title_p1} <br />
        {text.title_p2} <span>Tube Scripter </span>
      </h1>

      <div className={styles.carossel}>
        <img className={styles.nav_btn} src={prev_img} />
        <div className={styles.reviews}>
          <Review isfront={false} index={1} current={2} />
          <Review isfront={true} index={2} current={2} />
          <Review isfront={false} index={3} current={2} />
        </div>
        <img className={styles.nav_btn} src={next_img} />
      </div>
    </div>
  );
}

const Review = ({ index, current }) => {
  let isfront = index === current;
  let isleft = index < current;
  let isright = index > current;

  const createStars = (nb) => {
    let tab = [];
    for (let i = 0; i < nb; i++) {
      tab.push(true);
    }
    return tab;
  };

  return (
    <div
      className={`
      ${styles.review} 
      ${isleft ? styles.isleft : ""} 
      ${isright ? styles.isright : ""}
      ${isfront ? styles.isfront : ""} 
      `}
    >
      <img src={isfront ? red_mess : black_mess} alt="review" />
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={user_img} className={styles.user_img} alt="user" />
          <div className={styles.data}>
            <h3>SARA WILLIAMS</h3>
            <span>CEO, AGENCY</span>
            <div className={styles.stars}>
              {createStars(5).map((str, key) => {
                return <img key={key} src={star} alt="star" />;
              })}
            </div>
          </div>
        </div>
        <p>
          "Tube Scripter est un générateur de scripts spécialisé dans les vidéos
          YouTube.Cet outil est conçu pour être utilizer sur n'importe quelle
          thèmes de vidéos."
        </p>
      </div>
    </div>
  );
};

export default Reviews;
