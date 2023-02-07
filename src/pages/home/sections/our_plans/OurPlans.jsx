import React, { useEffect, useState } from "react";

import styles from "./our_plans.module.scss";

import available_img from "../../../../assets/svg/plans/available.svg";
import not_available from "../../../../assets/svg/plans/not_available.svg";

import { useSelector } from "react-redux";
import GetText from "./our_plans.lang";

function OurPlans() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <h1>
        {text.title} <span> {text.choose} </span>
      </h1>
      <p>{text.desc}</p>

      <div className={styles.plans}>
        {text.plan.map((plan, key) => {
          return <Plan plan={plan} text={text} key={key} />;
        })}
      </div>
    </div>
  );
}

const Plan = ({ plan, text }) => {
  return (
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
        <h3>{plan.price}</h3>

        {plan.type !== "free" && (
          <button>
            <form
              action="http://localhost:3005/api/payment/create-checkout-session"
              method="POST"
            >
              <input type="hidden" name="lookup_key" value={plan.type} />
              <input
                type="hidden"
                name="email"
                value="hatembenechikh100@gmail.com"
              />
              <button type="submit">{text.choose}</button>
            </form>
          </button>
        )}
      </div>
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

export default OurPlans;
