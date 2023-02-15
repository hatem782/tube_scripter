import React, { useEffect, useState } from "react";
import GetText from "./chat_gpt";

import styles from "./scripter.module.scss";
import menu_icon from "../../assets/svg/script/menu.svg";

import loop_fig from "../../assets/svg/script/loop.svg";
import youtube2 from "../../assets/svg/script/youtube2.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";
import bot from "../../assets/images/bot.png";

import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

import { useSelector } from "react-redux";

import TikTokGpt from "./chats/TikTokGpt";
import YoutubeGpt from "./chats/YoutubeGpt";

function ChatGpt() {
  const script = useSelector((state) => state.ScriptReducer);
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  const scripts_types = [
    {
      img: bot,
      title: text.YouTube_Scripter,
      value: "yt",
    },
    {
      img: bot,
      title: text.Tiktok_Scripter,
      value: "vs",
    },
  ];
  const [open, setOpen] = useState(false);
  const [scrp_type, setScrp_type] = useState(scripts_types[0]);

  useEffect(() => {
    if (script.tiktoktitle.length > 0) {
      setScrp_type(scripts_types[1]);
    } else {
      setScrp_type(scripts_types[0]);
    }
  }, [script]);

  const handleSelect = (type) => {
    setScrp_type(type);
    setOpen(false);
  };

  const handleopne = () => {
    setOpen(!open);
  };

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.window}>
            <div className={styles.head}>

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
              {scrp_type.value === "yt" && <YoutubeGpt text={text} />}
              {scrp_type.value === "vs" && <TikTokGpt text={text} />}
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

export default ChatGpt;
