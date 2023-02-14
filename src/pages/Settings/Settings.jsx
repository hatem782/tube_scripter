import React, { useEffect, useState } from "react";
import axios from "../../custom/axios";

import styles from "./settings.module.scss";

import bot_fig from "../../assets/svg/settings/bottom_fig.svg";
import top_fig from "../../assets/svg/settings/top_fig.svg";

import user_img from "../../assets/images/user3.png";
import { Red_Button } from "../../components/buttons/Buttons";
import Switcher from "../../components/switcher/Switcher";

import { plans_en } from "../home/sections/our_plans/data";

import available_img from "../../assets/svg/plans/available.svg";
import not_available from "../../assets/svg/plans/not_available.svg";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";
import { useSelector } from "react-redux";
import GetText from "./settings.lang";
import { useNavigate } from "react-router-dom";

function Settings() {
  const user = useSelector((state) => state.UserReducer?.user);
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  const sections = [
    {
      title: text.Profile,
      value: "pf",
    },
    {
      title: text.Your_plan,
      value: "vp",
    },
  ];
  const [section, setSection] = useState(sections[0]);

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <div className={styles.container}>
          <img src={top_fig} className={styles.top_fig} alt="figure" />
          <img src={bot_fig} className={styles.bot_fig} alt="figure" />

          <div className={styles.container2}>
            <div className={styles.left_side}>
                <div className={styles.imgUser}>
                  <i class="fa-solid fa-user"></i>
                </div>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
              <Red_Button>{text.change_details}</Red_Button>
            </div>
            <div className={styles.right_side}>
              <div className={styles.header}>
                {sections.map((sec, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => {
                        setSection(sec);
                      }}
                      className={`
                    ${styles.button} 
                    ${sec.value === section.value ? styles.active : ""}`}
                    >
                      {sec.title}
                    </div>
                  );
                })}
              </div>
              <div className={styles.body}>
                {section.value === "pf" && <Profile text={text} />}
                {section.value === "vp" && <VotrePlan text={text} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Profile = ({ text }) => {
  const user = useSelector((state) => state.UserReducer?.user);
  const [price,setPrice] = useState(null)
  useEffect(()=>{
    if(user.plan == "free")
      setPrice('2500')
    else if(user.plan == "premium")
    setPrice('20000') 
    else if(user.plan == "starter")
    setPrice('8000') 
    
  },[user])
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <h4>{text.name_and_lastname}</h4>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </div>

      <div className={styles.info}>
        <h4>{text.Email_address}</h4>
        <h2>{user.email}</h2>
      </div>

      <div className={styles.info}>
        <h4>{text.Language}</h4>
        <h2>Français</h2>
      </div>

      <div className={styles.info}>
        <h4>{text.Number_of_words}</h4>
        <h2>{user.nbr_words}/{price}</h2>
      </div>

    </div>
  );
};

const VotrePlan = ({ text }) => {
  let plan_index = 1;
  let plan = text.plan[plan_index];
  const user = useSelector((state) => state.UserReducer.user);

  const cancel_sub = async () => {
    console.log(user.subscribe_id);
    try {
      const resp = await axios.post("/api/payment/cancel-subscription", {
        subscription_id: user.subscribe_id,
      });
      console.log(resp);
    } catch (error) {
      // console.log()
    }
  };

  let navigate = useNavigate()

  return (
    <div className={styles.votre_plan}>
      <span className={styles.actual}>{text.Your_current_plan}</span>

        {user.plan == "free" ? 
        <>
      <div className={styles.plan}>
        <h2>{text.noplan}</h2>
        <p>{text.notext}</p>
      </div>  
      <Red_Button onClick={e => navigate('/home#payment')}>{text.nosubs}</Red_Button>
        </>
        :
        <>
        <div className={styles.plan}>
        <h2>{plan.title}</h2>
        <div className={styles.caracts}>
          {plan.caracts.map((caract, key) => {
            return (
              <Caract key={key} available={caract.available}>
                {caract.label}
              </Caract>
            );
          })}
        </div> 
      </div>
      <Red_Button onClick={cancel_sub}>{text.Cancel_Subscription}</Red_Button>
        </>
        }
       
    </div>
  );
};

const Caract = ({ available, children }) => {
  return (
    <div className={styles.caract}>
      <div className={styles.img_cont}>
        {available ? (
          <img
            src={available_img}
            className={styles.available}
            alt="available"
          />
        ) : (
          <img
            src={not_available}
            className={styles.not_available}
            alt="not_available"
          />
        )}
      </div>
      <span>{children}</span>
    </div>
  );
};

export default Settings;
