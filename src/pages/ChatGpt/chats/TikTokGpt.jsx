import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllScriptsTikTok } from "../../../redux/Scripter/scripter.actions";

import reload_fig from "../../../assets/svg/script/reload.svg";

import { Red_Button } from "../../../components/buttons/Buttons";
import TextArea from "../../../components/TextArea/TextArea";
import Select from "../../../components/select/Select";
import Block from "../../../components/Block/Block";

import styles from "../scripter.module.scss";

const TikTokGpt = ({ text }) => {
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
        <div className={styles.form_body}>
          <div className={styles.selects}>
            <Select
              onChange={handle_change}
              text={text}
              name="language"
              with_img={true}
              items={text.langs}
            />
            <Select
              onChange={handle_change}
              name="tone_of_voice"
              with_img={false}
              label={text.Target_audience_age_group}
              items={text.items}
            />
          </div>
          <div className={styles.selects} style={{ marginTop: "1.5rem" }}>
            <Select
              onChange={handle_change}
              name="duration"
              with_img={false}
              label={text.duration}
              items={text.minutes}
            />
          </div>
          <div className={styles.input}>
            <TextArea
              onChange={handle_change}
              value={form.description}
              name="description"
              isLabeled={true}
              label={text.Description}
              placeholder={text.textarea}
            />
          </div>
        </div>
        <div className={styles.button}>
          <Red_Button loading={script?.payload} onClick={GetAllPossible}>
            {text.Generate}
          </Red_Button>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.result_body}>
          <Block
            label={text.Description}
            parag={script?.tiktokscriptdescription[0] || ""}
          />
        </div>
        <div className={styles.button}>
          <div style={{ marginRight: "1rem" }}>
            <Red_Button>
              <i className="fa-solid fa-pen" style={{ fontSize: "1.5em" }}></i>
            </Red_Button>
          </div>
          <Red_Button onClick={GetAllPossible}>
            <img src={reload_fig} alt="reload" />
            <span style={{ margin: "0px 10px" }}>{text.Reload}</span>
          </Red_Button>
        </div>
      </div>
    </div>
  );
};

export default TikTokGpt;