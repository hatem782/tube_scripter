import React, { useEffect, useState } from "react";
import GetText from "./scripter.lang";

import styles from "./scripter.module.scss";
import menu_icon from "../../assets/svg/script/menu.svg";

import loop_fig from "../../assets/svg/script/loop.svg";
import youtube2 from "../../assets/svg/script/youtube.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import TikTokScripter from "./scripts/TikTokScripter";
import YoutubeScripter from "./scripts/YoutubeScripter";
import { GetOneDraft } from "../../redux/Drafts/draft.actions";

function Scripter() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const draft = useSelector((state) => state?.DraftReducer?.draft);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  let { _id } = useParams();
  let { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(GetOneDraft(_id));
    }
  }, [_id]);

  const scripts_types = [
    {
      img: youtube2,
      title: text.YouTube_Scripter,
      value: "yt",
    },
    {
      img: video_scripter,
      title: text.Tiktok_Scripter,
      value: "tk",
    },
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const [scrp_type, setScrp_type] = useState(scripts_types[0]);

  const handleSelect = (type) => {
    setScrp_type(type);
    setOpen(false);
  };

  const handleopne = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    if(type == "longFormat"){
      setScrp_type(scripts_types[0]);

    }else if(type == "shortFormat" ){
      setScrp_type(scripts_types[1]);

    }else{
      navigate('/settings')
    }
  },[type])

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.window}>
            <div className={styles.head}>
              <img
                onClick={handleopne}
                src={menu_icon}
                className={styles.menu_btn}
                alt="menu btn"
              />
              <div className={styles.selected_scripter}>
                <img
                  src={scrp_type.img}
                  className={styles.icon}
                  alt={scrp_type.title}
                />
                <span>{scrp_type.title}</span>
              </div>
            </div>
            <div className={styles.body}>
              {scrp_type.value === "yt" && (
                <YoutubeScripter draft={draft} text={text} />
              )}
              {scrp_type.value === "tk" && <TikTokScripter draft={draft} text={text}  />}
            </div>

            {open && (
              <div className={styles.scripter_selector}>
                <div className={styles.left_side}>
                  <div className={styles.rech_input}>
                    <img src={loop_fig} />
                    <input placeholder="Recherche" />
                  </div>
                  <div className={styles.scripters_types}>
                    {scripts_types.map((item, key) => {
                      return (
                        <div
                          key={key}
                          onClick={() => {
                            handleSelect(item);
                          }}
                          className={styles.scripter_type}
                        >
                          <img src={item.img} />
                          <span>{item.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Scripter;
