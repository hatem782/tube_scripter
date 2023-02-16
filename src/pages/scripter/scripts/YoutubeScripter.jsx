import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllScriptsYT } from "../../../redux/Scripter/scripter.actions";
import { CreateDraft, UpdateDraft } from "../../../redux/Drafts/draft.actions";
import keys from "../../../redux/Scripter/scripter.keys";

import reload_fig from "../../../assets/svg/script/reload.svg";

import { Red_Button } from "../../../components/buttons/Buttons";
import TextField from "../../../components/inputs/TextField";
import TextArea from "../../../components/TextArea/TextArea";
import Select from "../../../components/select/Select";
import Block from "../../../components/Block/Block";

import styles from "../scripter.module.scss";
import { useNavigate } from "react-router-dom";

const YoutubeScripter = ({ text, draft }) => {
  const user = useSelector((state) => state.UserReducer?.user);
  const script = useSelector((state) => state.ScriptReducer);
  const [form, setForm] = useState({
    video_description: "",
    search_term: "",
    tone_of_voice: "excited",
    language: "fr",
    num_copies: 1,
    duration: "p-1",
    draft_title: "",
    type: "yt",
  });

  console.log(script);

  const dispatch = useDispatch();
  useEffect(() => {
    if (draft) {
      setForm({ ...form, draft_title: draft?.draft_title });
      dispatch({
        type: keys.can_edit_youtube,
        value: true,
      });
    }
  }, [draft]);
  const GetAllPossible = () => {
    dispatch(GetAllScriptsYT(form, user));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const SaveToDraft = () => {
    if (draft) {
      dispatch(UpdateDraft(draft));
    } else {
      dispatch(CreateDraft(form));
    }
  };

  const [isModifyBtn, setIsModifyBtn] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    console.log(isModifyBtn);
  }, [isModifyBtn]);

  useEffect(() => {}, []);

  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.form_body}>
          <div className={styles.input}>
            <TextField
              isLabeled={true}
              onChange={handle_change}
              value={form.draft_title}
              name="draft_title"
              label="Draft Title"
              placeholder="Draft Title"
            />
          </div>
          <div className={styles.selects}>
            <Select
              onChange={handle_change}
              name="language"
              label={text.languages}
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
            <TextField
              isLabeled={true}
              onChange={handle_change}
              value={form.search_term}
              name="search_term"
              label={text.Key_words}
              placeholder="EX : Neutral Formal Friendly"
            />
          </div>
          <div className={styles.input}>
            <TextArea
              onChange={handle_change}
              value={form.video_description}
              name="video_description"
              isLabeled={true}
              label={text.Description}
              placeholder={text.textarea}
            />
          </div>
        </div>

        <div className={styles.button}>
          <div className={styles.btn}>
            <Red_Button
              init_bloc={!script.can_edit_youtube}
              onClick={(e) => navigate("/tubeChat/longFormat")}
            >
              {text.EditChat}
            </Red_Button>
          </div>
          <div className={styles.btn}>
            <Red_Button loading={script?.payload} onClick={GetAllPossible}>
              {text.Generate}
            </Red_Button>
          </div>
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.result_body}>
          <Block
            isBtn={isModifyBtn}
            name="Title"
            label={`${text.Title} : ${script?.youtubetitle || ""}`}
          />

          <Block
            isBtn={isModifyBtn}
            label={text.Video_description}
            name="Video_description"
            parag={script?.youtubedescription || ""}
          />

          <Block
            isBtn={isModifyBtn}
            label={text.Content}
            name="Script"
            parag={script?.content_scripter?.replace(/##/g, `\n`) || ""}
          />
        </div>

        <div className={styles.button}>
          <div style={{ marginRight: "1rem" }}>
            <Red_Button
              onClick={(e) => setIsModifyBtn(!isModifyBtn)}
              init_bloc={!script.can_edit_youtube}
            >
              <i className="fa-solid fa-pen" style={{ fontSize: "1.4em" }}></i>
            </Red_Button>
          </div>
          <Red_Button
            init_bloc={!script.can_edit_youtube}
            onClick={GetAllPossible}
          >
            <img src={reload_fig} alt="reload" />
            <span style={{ margin: "0px 10px" }}>{text.Reload}</span>
          </Red_Button>
          <div style={{ marginLeft: "1rem" }}>
            <Red_Button
              init_bloc={!script.can_edit_youtube}
              onClick={SaveToDraft}
            >
              {draft ? "Update" : "Save"}
            </Red_Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeScripter;
