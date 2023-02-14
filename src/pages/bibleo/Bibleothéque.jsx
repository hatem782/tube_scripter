import React, { useEffect } from "react";
import styles from "./bibleo.module.scss";

import youtube from "../../assets/svg/script/youtube.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import { useNavigate } from "react-router-dom";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import { DeleteDraft, GetAllDrafts } from "../../redux/Drafts/draft.actions";

import delete_icon from "../../assets/svg/script/delete.svg";

const Bibleotheque = () => {
  const dispatch = useDispatch();

  const drafts = useSelector((state) => state.DraftReducer.drafts) || [];

  useEffect(() => {
    dispatch(GetAllDrafts());
  }, []);

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <h1>Bibliothèque</h1>
        <div className={styles.bibleo}>
          <div className={styles.textSize}>
            <h2>Créer votre prochain script</h2>
          </div>
          <div className={styles.cards}>
            {drafts.map((draft, key) => {
              return <Card key={key} type="yt" draft={draft} />;
            })}

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

const Card = ({ type = "yt", draft }) => {
  const scripter = scripts_types.find((st) => st.value === type);
  const dispatch = useDispatch();

  const openDraft = () => {
    navigate(`/script/${draft?._id}`);
  };

  const handle_delete = () => {
    dispatch(DeleteDraft(draft));
  };

  let navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.img_type} onClick={openDraft}>
          <img src={scripter.img} alt={scripter.title} />
        </div>
        <div className={styles.delete_icon}>
          <img src={delete_icon} alt="delete" onClick={handle_delete} />
        </div>
      </div>

      <h3 onClick={openDraft}>{draft?.draft_title}</h3>
      <p onClick={openDraft}>{draft?.draft?.description}</p>
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
