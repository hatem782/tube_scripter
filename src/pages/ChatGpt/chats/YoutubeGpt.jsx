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

const YoutubeGpt = ({ text }) => {
  const dispatch = useDispatch();
  let { type } = useParams();

  const user = useSelector((state) => state.UserReducer?.user);
  const script = useSelector((state) => state.ScriptReducer);
  const [formS, setFormS] = useState({
    text: "",
    num_copies: 1,
  });

  const [tes, settes] = useState(null);

  const GetAllPossible = () => {
    if (formS.text?.length >= 2000) {
      toast.error("text must be less than 2000 caracter");
      return;
    }
    dispatch(YoutubeChat(formS, user));
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setFormS({text:value});
  };

  const [isModifyBtn, setIsModifyBtn] = useState(false);

  useEffect(() => {
    settes("hello");
    if (type && type == "longFormat") {
      if (
        script.youtubetitle?.length > 0 &&
        script.youtubedescription?.length > 0 &&
        script.content_scripter?.length > 0
      ) {
        setFormS({
          text: 
            script.youtubetitle +'\n'+
            script.youtubedescription +'\n'+
            script.content_scripter.replace(/##/g, `\n`) +'\n',
        
          num_copies: 3,
        });
      }
    }
  }, [type]);

  useEffect(() => {
    console.log(formS);
  }, [formS]);

  return (
    <div className={styles.scripter}>
      <div className={styles.form}>
        <div className={styles.form_body}>
          <div className={styles.input}>
            <TextArea
              onChange={handle_change}
              value={formS.text}
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
            <Red_Button
              init_bloc={!script.can_edit_gpt}
              onClick={(e) => setIsModifyBtn(!isModifyBtn)}
            >
              <i className="fa-solid fa-pen" style={{ fontSize: "1.5em" }}></i>
            </Red_Button>
          </div>
          <Red_Button init_bloc={!script.can_edit_gpt} onClick={GetAllPossible}>
            <img src={reload_fig} alt="reload" />
            <span style={{ margin: "0px 10px" }}>{text.Reload}</span>
          </Red_Button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeGpt;
