const texts = {
  en: {
    Information: "Information",
    home: "Home",
    about_us: "About us",
    Legal_Notice: "Legal Notice",
    Who_are_we: "Who are we",
    Privacy_Policy: "Privacy Policy",
    Terms_of_use: "Terms of use",
    Functioning: "Functioning",
    youtube_shorts: "Create a script",
    Reels: "Demo",
    Tiktoks: "Plans",
    FIND_US_ON: "FIND US ON",
    copy_rights: `© Copyright 2022-2023 TubeScripter Limited All rights are
    reserved | Directed by Shangoubaan`,
    french: "French",
    english: "English",
  },

  fr: {
    Information: "Information",
    home: "Accueil",
    about_us: "A propos",
    Legal_Notice: "Mentions légales",
    Who_are_we: "Qui sommes-nous",
    Privacy_Policy: "Politique de confidentialité",
    Terms_of_use: "Condition d'utilisation",
    Functioning: "Tube Scripter",
    youtube_shorts: "Créer un script",
    Reels: "Démo",
    Tiktoks: "Tarif",
    FIND_US_ON: "RETROUVEZ-NOUS SUR",
    copy_rights: `© Copyright 2022-2023 TubeScripter Limited Tous les droits sont
    réservés | Réalisé par Shangoubaan`,
    french: "Français",
    english: "Anglais",
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
