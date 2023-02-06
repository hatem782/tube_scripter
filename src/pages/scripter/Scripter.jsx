import React, { useState } from "react";
import { Red_Button } from "../../components/buttons/Buttons";

import styles from "./scripter.module.scss";
import menu_icon from "../../assets/svg/script/menu.svg";
import youtube_icon from "../../assets/svg/script/youtube.svg";
import arrow from "../../assets/svg/navbar/select_.svg";
import fr_flag from "../../assets/svg/footer/fr.png";
import en_flag from "../../assets/svg/footer/en.png";
import loop_fig from "../../assets/svg/script/loop.svg";
import youtube2 from "../../assets/svg/script/youtube2.svg";
import video_scripter from "../../assets/svg/script/video_scripter.svg";

import edit_fig from "../../assets/svg/script/edit.svg";
import copy_fig from "../../assets/svg/script/copy.svg";
import save_fig from "../../assets/svg/script/save.svg";
import delete_fig from "../../assets/svg/script/delete.svg";

import star_fig from "../../assets/svg/script/star.svg";
import reload_fig from "../../assets/svg/script/reload.svg";

import TextField from "../../components/inputs/TextField";
import TextArea from "../../components/TextArea/TextArea";

function Scripter() {
  // open and close the selector of the youtube / video
  const scripts_types = [
    {
      img: youtube2,
      title: "YouTube Scripter",
      value: "yt",
    },
    {
      img: video_scripter,
      title: "Tiktok Scripter",
      value: "vs",
    },
  ];
  const [open, setOpen] = useState(false);
  const [scrp_type, setScrp_type] = useState(scripts_types[0]);

  const handleopne = () => {
    setOpen(!open);
  };

  const handleSelect = (type) => {
    setScrp_type(type);
    setOpen(false);
  };

  return (
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
            {scrp_type.value === "yt" && <YoutubeScripter />}
            {scrp_type.value === "vs" && <TikTokScripter />}
          </div>

          <div className={styles.footer}>
            <div className={styles.left_side}>
              <Red_Button>Générer</Red_Button>
            </div>
            <div className={styles.right_side}>
              <Red_Button>
                <img src={reload_fig} alt="reload" />
              </Red_Button>
            </div>
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
  );
}

const YoutubeScripter = () => {
  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.selects}>
          <SelectFlag />
          <SelectMood />
        </div>
        <div className={styles.input}>
          <TextField
            isLabeled={true}
            label="Mots Clés"
            placeholder="EX : Neutral,Formal,Friendly"
          />
        </div>
        <div className={styles.input}>
          <TextArea isLabeled={true} label="Description" />
        </div>
      </div>
      <div className={styles.result}>
        <Block label={"Titre : "} />
        <Block
          label={"Hooks : "}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={`Forget the zoo! I'm taking you on a journey to meet some of the
            wildest animals you've ever seen!\n2) Prepare to be amazed as I
            explore the wildest corners of the world and find the most
            incredible animals!\n3) Step right up and take a look at the
            strangest and most exotic wildlife seen in this video! \n4) Ready to
            be amazed? Let's go on an adventure to find the world’s most unusual
            creatures!"`}
        />
        <Block
          label={"Contenu vidéo : "}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={`Les animaux du monde entier ont besoin d'aide. Dans cette vidéo,
          nous explorons la situation critique des animaux dans les forêts et
          comment nous pouvons aider à faire la différence. Nous discuterons
          des effets de la déforestation et de la façon dont elle affecte la
          faune de ces régions. Nous vous montrerons également comment vous
          pouvez aider, par exemple en faisant des dons à des associations
          caritatives ou en participant à des programmes de bénévolat.
          Ensemble, nous pouvons faire la différence et sauver ces précieux
          animaux !`}
        />

        <Block
          label={"Description vidéo : "}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={`Les animaux du monde entier ont besoin d'aide. Dans cette vidéo,
          nous explorons la situation critique des animaux dans les forêts et
          comment nous pouvons aider à faire la différence. Nous discuterons
          des effets de la déforestation et de la façon dont elle affecte la
          faune de ces régions. Nous vous montrerons également comment vous
          pouvez aider, par exemple en faisant des dons à des associations
          caritatives ou en participant à des programmes de bénévolat.
          Ensemble, nous pouvons faire la différence et sauver ces précieux
          animaux !`}
        />
      </div>
    </div>
  );
};

const TikTokScripter = () => {
  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.selects}>
          <SelectFlag />
          <SelectMood />
        </div>
        <div className={styles.input}>
          <TextArea isLabeled={true} label="Description" />
        </div>
      </div>
      <div className={styles.result}>
        <Block
          label={"Hooks : "}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={`Forget the zoo! I'm taking you on a journey to meet some of the
            wildest animals you've ever seen!\n2) Prepare to be amazed as I
            explore the wildest corners of the world and find the most
            incredible animals!\n3) Step right up and take a look at the
            strangest and most exotic wildlife seen in this video! \n4) Ready to
            be amazed? Let's go on an adventure to find the world’s most unusual
            creatures!"`}
        />
      </div>
    </div>
  );
};

const SelectFlag = () => {
  let items = [
    { img: fr_flag, title: "French", value: "Fr" },
    { img: en_flag, title: "English", value: "En" },
  ];
  const [select, setSelect] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const handle_open = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setSelect(item);
  };

  return (
    <div className={styles.select}>
      <label>Language</label>

      <div className={styles.header} onClick={handle_open}>
        <img src={select.img} className={styles.flag} />
        <span>{select.title}</span>
        <img src={arrow} className={styles.arrow} />
      </div>

      {open && (
        <div className={styles.hidden}>
          {items.map((item, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleSelect(item);
                }}
                className={styles.item}
              >
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SelectMood = () => {
  let items = [
    { title: "Friendly", value: "Friendly" },
    { title: "Neutral", value: "Neutral" },
    { title: "Formal", value: "Formal" },
  ];
  const [select, setSelect] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const handle_open = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setSelect(item);
  };

  return (
    <div className={styles.select}>
      <label>Mood</label>
      <div className={styles.header} onClick={handle_open}>
        <span>{select.title}</span>
        <img src={arrow} className={styles.arrow} />
      </div>

      {open && (
        <div className={styles.hidden}>
          {items.map((item, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleSelect(item);
                }}
                className={styles.item}
              >
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Block = ({ label, parag, parag_stat }) => {
  return (
    <div className={styles.block}>
      <h1>{label} </h1>
      {parag && <p>{parag}</p>}
      {parag && (
        <div className={styles.bottom}>
          <span className={styles.stat_parag}>{parag_stat}</span>

          <div className={styles.stars_and_btns}>
            <div className={styles.stars}>
              <img src={star_fig} alt="star" />
              <img src={star_fig} alt="star" />
              <img src={star_fig} alt="star" />
              <img src={star_fig} alt="star" />
              <img src={star_fig} alt="star" />
            </div>
            <div className={styles.btns}>
              <div className={styles.img_cont_btn}>
                <img src={copy_fig} alt="btn" />
              </div>
              <div className={styles.img_cont_btn}>
                <img src={delete_fig} alt="btn" />
              </div>
              <div className={styles.img_cont_btn}>
                <img src={edit_fig} alt="btn" />
              </div>
              <div className={styles.img_cont_btn}>
                <img src={save_fig} alt="btn" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scripter;
