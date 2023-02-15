import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeChat } from "../../../redux/Scripter/scripter.actions";

import reload_fig from "../../../assets/svg/script/reload.svg";

import { Red_Button } from "../../../components/buttons/Buttons";
import TextArea from "../../../components/TextArea/TextArea";
import Block from "../../../components/Block/Block";

import styles from "../scripter.module.scss";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const TikTokGpt = ({ text }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer?.user);
  const script = useSelector((state) => state.ScriptReducer);
  const [form, setForm] = useState({
    text: "",
    num_copies: 1,
  });
  let { type } = useParams();

  const GetAllPossible = () => {
    if (form.text.length >= 2000) {
      toast.error("text must be less than 2000 caracter");
      return;
    }
    dispatch(YoutubeChat(form, user));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const [isModifyBtn, setIsModifyBtn] = useState(false);

  useEffect(() => {
    if(type && type =="shortFormat"){
      if (
        script.tiktoktitle.length > 0 &&
        script.tiktokintro.length > 0 &&
        script.tiktokhooks.length > 0 &&
        script.tiktokscriptdescription.length > 0
      )
        setForm({
          text:
            script.tiktoktitle +
            "\n\n" +
            script.tiktokintro +
            "\n\n" +
            script.tiktokhooks +
            "\n\n" +
            script.tiktokscriptdescription +
            "\n\n",
        });
    }

   
  }, [script]);

  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.form_body}>
          <div className={styles.input}>
            <TextArea
              onChange={handle_change}
              value={form.text}
              name="text"
              isLabeled={true}
              label={text.Description}
              placeholder={text.textarea}
              rows={14}
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
            isBtn={isModifyBtn}
            label={text.ChatGpt}
            name="Script"
            parag={script?.youtube_gpt || ""}
          />
        </div>
        <div className={styles.button}>
          <div style={{ marginRight: "1rem" }}>
            <Red_Button onClick={(e) => setIsModifyBtn(!isModifyBtn)}>
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
