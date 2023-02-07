import React from "react";
import styles from "./contact.module.scss";

import bot_fig from "../../assets/svg/settings/bottom_fig.svg";
import top_fig from "../../assets/svg/settings/top_fig.svg";

import contact_fig from "../../assets/images/contact_fig.png";

import TextArea from "../../components/TextArea/TextArea";
import TextField from "../../components/inputs/TextField";
import { Red_Button } from "../../components/buttons/Buttons";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";

function Contact() {
  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <div className={styles.container}>
          <img src={top_fig} className={styles.top_fig} alt="figure" />
          <img src={bot_fig} className={styles.bot_fig} alt="figure" />

          <div className={styles.left}>
            <h1>CONTACTEZ-NOUS</h1>
            <TextField className={styles.input} placeholder="Your Name" />
            <TextField className={styles.input} placeholder="Your Email" />
            <TextArea
              rows={5}
              className={styles.input}
              placeholder="Your Message"
            />
            <Red_Button>Envoyer</Red_Button>
          </div>

          <div className={styles.right}>
            <img src={contact_fig} alt="contact us" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
