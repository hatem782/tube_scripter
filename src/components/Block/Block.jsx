import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import keys from "../../redux/Scripter/scripter.keys";

import copy_fig from "../../assets/svg/script/copy.svg";
import save_fig from "../../assets/svg/script/save.svg";

import styles from "./block.module.scss";

const Block = ({ label, parag, name, isBtn }) => {
  let dispatch = useDispatch();

  function dispatchText() {
    switch (name) {
      case "Title":
        dispatch({
          type: keys.youtubetitle,
          value: newState,
        });
        break;
      case "Video_description":
        dispatch({
          type: keys.youtubedescription,
          value: newState,
        });
        break;
      case "Script":
        dispatch({
          type: keys.content_scripter,
          value: newState,
        });
        break;
      case "Hooks":
        dispatch({
          type: keys.youtubehooks,
          value: newState,
        });
        break;
      case "Video intro":
        dispatch({
          type: keys.youtubeintros,
          value: newState,
        });

        break;
      default:
        break;
    }
  }

  const [newState, setnewState] = useState(null);

  useEffect(() => {
    setnewState(parag);
  }, [parag]);

  return (
    <div className={styles.block}>
      <h1>{label} </h1>
      {!isBtn ? (
        <>{newState && <p style={{whiteSpace: "pre-line"}}>{newState}</p>} </>
      ) : (
        <>
          {parag && (
            <textarea
              value={newState}
              onChange={(e) => setnewState(e.target.value)}
              rows="5"
              className={styles.btninput}
            ></textarea>
          )}
        </>
      )}
      {parag && (
        <div className={styles.bottom}>
          <span className={styles.stat_parag}></span>

          <div className={styles.stars_and_btns}>
            <div className={styles.btns}>
              <div className={styles.img_cont_btn}>
                <img src={copy_fig} alt="btn" />
              </div>

              <div className={styles.img_cont_btn} onClick={dispatchText}>
                <img src={save_fig} alt="btn" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Block;
