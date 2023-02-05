import React from "react";

import styles from "./our_plans.module.scss";

import available_img from "../../../../assets/svg/plans/available.svg";
import not_available from "../../../../assets/svg/plans/not_available.svg";

import { plans } from "./data";

function OurPlans() {
  return (
    <div className={styles.main}>
      <h1>
        Plusieurs options à <span> choisir </span>
      </h1>
      <p>
        Tube Scripter est un générateur de scripts spécialisé dans les vidéos
        YouTube .Cet outil est conçu pour être utilizer sur n'importe quelle
        thèmes de vidéos.
      </p>

      <div className={styles.plans}>
        {plans.map((plan, key) => {
          return <Plan plan={plan} key={key} />;
        })}
      </div>
    </div>
  );
}

const Plan = ({ plan }) => {
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
        <button>Choisir</button>
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
