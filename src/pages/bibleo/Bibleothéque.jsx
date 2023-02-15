import React, { useEffect, useState } from "react";
import styles from "./bibleo.module.scss";

import youtube from "../../assets/svg/script/youtube.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import { useNavigate } from "react-router-dom";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import { DeleteDraft, GetAllDrafts } from "../../redux/Drafts/draft.actions";

import delete_icon from "../../assets/svg/script/delete.svg";
import GetText from "./biblep.lang";

const Bibleotheque = () => {
  const dispatch = useDispatch();

  const drafts = useSelector((state) => state.DraftReducer.drafts) || [];
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);
  useEffect(() => {
    dispatch(GetAllDrafts());
  }, []);

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <h1>{text.type}</h1>
        <div className={styles.bibleo}>
          <div className={styles.textSize}>
            <h2>{text.descriptionVideo}</h2>
          </div>
          <div className={styles.cardsRand}>
            {drafts.map((draft, key) => {
              return <Card key={key} type={draft.type} draft={draft} />;
            })}
          <div className={styles.textSize} style={{marginTop:"3.5rem"}}>
            <h2>{text.createVideo}<span> Script</span></h2>
          </div>
            <CardRand
              type='yt'
              description={text.about}
            />
            <CardRand
              type='tk'
              description={text.about}
          />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ type, draft }) => {
  const scripter = scripts_types.find((st) => st.value === type);
  console.log(scripter)
  const dispatch = useDispatch();

  const openDraft = () => {
    type == "yt" ?  navigate(`/script/longFormat/${draft?._id}`):navigate(`/script/shortFormat/${draft?._id}`)
   
  };

  const handle_delete = () => {
    dispatch(DeleteDraft(draft));
  };

  let navigate = useNavigate();
  return (
    <div className={styles.card}  >
      <div className={styles.header}>
        <div className={styles.imgBox}>
        <div className={styles.img_type} onClick={openDraft}>
          <img src={scripter?.img} alt={scripter?.title} />
        </div>
          <h2>{scripter?.title}</h2>

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
const CardRand = ({ type, description }) => {
  const scripter = scripts_types.find((st) => st.value === type);
  let navi = useNavigate()
  return (
    <div className={styles.cardRand} onClick={e => type =="yt" ?window.location.href ="/script/longFormat" : window.location.href = "/script/shortFormat" }>
      <div className={styles.header}>
        <div className={styles.imgBox}>
        <div className={styles.img_type} >
          <img src={scripter?.img} alt={scripter?.title} />
        </div>

        </div>

      </div>
      <h3>{scripter?.title}</h3>

      <p >{description}</p>
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
    value: "tk",
  },
];
