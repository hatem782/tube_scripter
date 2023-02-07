import { plans_en, plans_fr } from "../home/sections/our_plans/data";

const texts = {
  en: {
    plan: plans_en,
    change_details: "Change Details",
    Profile: "Profile",
    Your_plan: "Your plan",
    name_and_lastname: "First Name & Last name",
    Email_address: "E-mail address",
    Language: "Language",
    Number_of_words: "Number of words",
    Notifications: "Notifications",
    Your_current_plan: "Your current plan",
    Cancel_Subscription: "Cancel Subscription",
  },

  fr: {
    plan: plans_fr,
    change_details: "Modifier les détails",
    Profile: "Profile",
    Your_plan: "Votre plan",
    name_and_lastname: "Nom & Prénom",
    Email_address: "Adresse e-mail",
    Language: "Language",
    Number_of_words: "Nombre des mots",
    Notifications: "Notifications",
    Your_current_plan: "Votre forfait actuel",
    Cancel_Subscription: "Annuler Subscription",
  },
};

const GetText = (lang) => {
  if (!lang) {
    return texts.en;
  } else {
    return texts[lang];
  }
};

export default GetText;

//------ Language Getter in component
// import React, { useEffect,useState } from "react";
// import { useSelector } from "react-redux";
// import GetText from "./header.lang";
// ----------------------------------------------
// const lang = useSelector((state) => state?.LangReducer?.lang);
// const [text, setText] = useState(GetText(lang));
// useEffect(() => {
//   setText(GetText(lang));
// }, [lang]);
//------ Language Getter in component
