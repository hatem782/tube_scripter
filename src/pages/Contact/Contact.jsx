import React, { useState } from "react";
import styles from "./contact.module.scss";

import bot_fig from "../../assets/svg/settings/bottom_fig.svg";
import top_fig from "../../assets/svg/settings/top_fig.svg";

import contact_fig from "../../assets/images/contact_fig.png";

import TextArea from "../../components/TextArea/TextArea";
import TextField from "../../components/inputs/TextField";
import { Red_Button } from "../../components/buttons/Buttons";
import DashNav from "../../layouts/dash-navbar/DashNav";
import Footer from "../../layouts/footer/Footer";
import { toast } from "react-hot-toast";
import { CreateContact } from "../../services/ContactService";

const initial = {
  content: "",
  email: "",
  firstName: "",
  lastName: "",
};

function Contact() {
  //if (!(data && data.content && data.email &&  data.firstName  &&  data.lastName))
  const [form, setForm] = useState({ ...initial });
  const [sending, seSending] = useState(false);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const send_feedback = () => {
    seSending(true);
    const succ = () => {
      seSending(false);
      setForm({ ...initial });
      toast.success("send with success");
    };
    const fail = (error) => {
      console.log(error);
      seSending(false);
      toast.error(error.response.data.message);
    };
    CreateContact(form, succ, fail);
  };

  return (
    <>
      <DashNav />
      <div className={styles.main}>
        <div className={styles.container}>
          <img src={top_fig} className={styles.top_fig} alt="figure" />
          <img src={bot_fig} className={styles.bot_fig} alt="figure" />

          <div className={styles.left}>
            <h1>CONTACTEZ-NOUS</h1>
            <TextField
              onChange={handle_change}
              name="firstName"
              value={form.firstName}
              className={styles.input}
              placeholder="Firts Name"
            />
            <TextField
              onChange={handle_change}
              name="lastName"
              value={form.lastName}
              className={styles.input}
              placeholder="Last Name"
            />
            <TextField
              onChange={handle_change}
              name="email"
              value={form.email}
              className={styles.input}
              placeholder="Your Email"
            />
            <TextArea
              onChange={handle_change}
              name="content"
              value={form.content}
              rows={5}
              className={styles.input}
              placeholder="Your Message"
            />
            <Red_Button loading={sending} onClick={send_feedback}>
              Envoyer
            </Red_Button>
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
