import React, { useEffect, useState } from "react";
import { Red_Button } from "../../components/buttons/Buttons";
import GetText from "./scripter.lang";

import styles from "./scripter.module.scss";
import menu_icon from "../../assets/svg/script/menu.svg";
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
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

import { useDispatch } from "react-redux";
import {
  GetAllScriptsYT,
  GetAllScriptsTikTok,
} from "../../redux/Scripter/scripter.actions";

import { useSelector } from "react-redux";
import { isPremium, isStandar } from "../../custom/user.access";

function Scripter() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  const scripts_types = [
    {
      img: youtube2,
      title: text.YouTube_Scripter,
      value: "yt",
    },
    {
      img: video_scripter,
      title: text.Tiktok_Scripter,
      value: "vs",
    },
  ];
  const [open, setOpen] = useState(false);
  const [scrp_type, setScrp_type] = useState(scripts_types[0]);

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
              {scrp_type.value === "yt" && <YoutubeScripter text={text} />}
              {scrp_type.value === "vs" && <TikTokScripter text={text} />}
            </div>

            {/* <div className={styles.footer}>
              <div className={styles.left_side}></div>
              <div className={styles.right_side}></div>
            </div> */}

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

const YoutubeScripter = ({ text }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer?.user);
  const script = useSelector((state) => state.ScriptReducer);
  const [form, setForm] = useState({
    video_description: "",
    search_term: "",
    tone_of_voice: "excited",
    language: "fr",
    num_copies: 1,
  });

  const GetAllPossible = () => {
    dispatch(GetAllScriptsYT(form, user));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.selects}>
          <SelectFlag onChange={handle_change} text={text} name="language" />
          <SelectMood
            onChange={handle_change}
            text={text}
            name="tone_of_voice"
          />
        </div>
        <div className={styles.input}>
          <TextField
            isLabeled={true}
            onChange={handle_change}
            value={form.search_term}
            name="search_term"
            label={text.Key_words}
            placeholder="EX : Neutral,Formal,Friendly"
          />
        </div>
        <div className={styles.input}>
          <TextArea
            onChange={handle_change}
            value={form.video_description}
            name="video_description"
            isLabeled={true}
            label={text.Description}
          />
        </div>
        <div className={styles.button}>
          <Red_Button loading={script?.payload} onClick={GetAllPossible}>
            {text.Generate}
          </Red_Button>
        </div>
      </div>
      <div className={styles.result}>
        <Block label={`${text.Title} : ${script?.youtubetitles[0] || ""}`} />

        <Block
          label={text.Video_paragraph}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={script?.paragraphwriter[0] || ""}
        />

        {isPremium(user) && (
          <Block
            label={text.Hooks}
            parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
            parag={script?.youtubehooks[0] || ""}
          />
        )}

        {isPremium(user) && (
          <Block
            label={text.Video_description}
            parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
            parag={script?.youtubedescriptions[0] || ""}
          />
        )}

        {isPremium(user) && (
          <Block
            label={text.Video_intro}
            parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
            parag={script?.youtubeintros[0] || ""}
          />
        )}

        <div className={styles.button}>
          <Red_Button onClick={GetAllPossible}>
            <img src={reload_fig} alt="reload" />
          </Red_Button>
        </div>
      </div>
    </div>
  );
};

const TikTokScripter = ({ text }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer?.user);
  const script = useSelector((state) => state.ScriptReducer);
  const [form, setForm] = useState({
    description: "",
    language: "fr",
    num_copies: 1,
  });

  const GetAllPossible = () => {
    dispatch(GetAllScriptsTikTok(form, user));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.selects}>
          <SelectFlag onChange={handle_change} text={text} name="language" />
          <SelectMood
            onChange={handle_change}
            text={text}
            name="tone_of_voice"
          />
        </div>
        <div className={styles.input}>
          <TextArea
            onChange={handle_change}
            value={form.description}
            name="description"
            isLabeled={true}
            label={text.Description}
          />
        </div>
        <div className={styles.button}>
          <Red_Button loading={script?.payload} onClick={GetAllPossible}>
            {text.Generate}
          </Red_Button>
        </div>
      </div>
      <div className={styles.result}>
        <Block
          label={text.Description}
          parag_stat="87/ 448 caractères, il y a 1 jour 10 minutes"
          parag={script?.tiktokscriptdescription[0] || ""}
        />
        <div className={styles.button}>
          <Red_Button onClick={GetAllPossible}>
            <img src={reload_fig} alt="reload" />
          </Red_Button>
        </div>
      </div>
    </div>
  );
};

const SelectFlag = ({ onChange, name, text }) => {
  let items = [
    { img: fr_flag, title: text.french, value: "fr" },
    { img: en_flag, title: text.english, value: "en" },
  ];
  const [select, setSelect] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const handle_open = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setSelect(item);
    setOpen(false);
    onChange({ target: { value: item.value, name } });
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

const SelectMood = ({ onChange, name, text }) => {
  //
  let items = text.items;
  const [select, setSelect] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const handle_open = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setSelect(item);
    setOpen(false);
    onChange({ target: { value: item.value, name } });
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
