import React, { useState } from "react";
import axios from "../../custom/axios";

import styles from "./settings.module.scss";

import bot_fig from "../../assets/svg/settings/bottom_fig.svg";
import top_fig from "../../assets/svg/settings/top_fig.svg";

import user_img from "../../assets/images/user3.png";
import { Red_Button } from "../../components/buttons/Buttons";
import Switcher from "../../components/switcher/Switcher";

import { plans } from "../home/sections/our_plans/data";

import available_img from "../../assets/svg/plans/available.svg";
import not_available from "../../assets/svg/plans/not_available.svg";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";
import { useSelector } from "react-redux";
// import
function Settings() {
  const sections = [
    {
      title: "Profile",
      value: "pf",
    },
    {
      title: "Votre plan",
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
              <img src={user_img} alt="user" />
              <h2>Amanie ssame</h2>
              <p>Amaniesame@gmail.com</p>
              <Red_Button>Modifier les détails</Red_Button>
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
                {section.value === "pf" && <Profile />}
                {section.value === "vp" && <VotrePlan />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Profile = () => {
  const user = useSelector((state) => state.UserReducer?.user);
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <h4>Nom&Prénom</h4>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </div>

      <div className={styles.info}>
        <h4>Adresse e-mail</h4>
        <h2>{user.email}</h2>
      </div>

      <div className={styles.info}>
        <h4>Language</h4>
        <h2>Français</h2>
      </div>

      <div className={styles.info}>
        <h4>Nombre des mots</h4>
        <h2>{user.nbr_words}</h2>
      </div>

      <div className={styles.info}>
        <h4>Notifications</h4>
        <h2 className={styles.notif}>
          On
          <Switcher />
        </h2>
      </div>
    </div>
  );
};

const VotrePlan = () => {
  let plan_index = 1;
  let plan = plans[plan_index];
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

  return (
    <div className={styles.votre_plan}>
      <span className={styles.actual}>Votre forfait actuel</span>

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
      <Red_Button onClick={cancel_sub}>Cancel Subscription</Red_Button>
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
