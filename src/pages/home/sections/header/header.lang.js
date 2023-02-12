const texts = {
  en: {
    Demos: "Demos",
    Create_a_script: "Create a script",
    Prices: "Prices",
    Get_Premium: "Get Premium",
    WRITE: "WRITE",
    THE_BEST_SCRIPTS: "THE BEST SCRIPTS",
    FASTER: "FASTER.",
    To_Profile: "Dashboard",
  },
  fr: {
    Demos: "Démos",
    Create_a_script: "Créer un script ",
    Prices: "Tarifs",
    Get_Premium: "Obtenir Premium",
    WRITE: "ÉCRIVEZ",
    THE_BEST_SCRIPTS: "LES MEILLEURS SCRIPTS",
    FASTER: "PLUS RAPIDEMENT.",
    To_Profile: "Dashboard",
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
// import { useSelector } from "react-redux";
// import GetText from "./header.lang";
// import React, { useEffect,useState } from "react";
// ----------------------------------------------
// const lang = useSelector((state) => state?.LangReducer?.lang);
// const [text, setText] = useState(GetText(lang));
// useEffect(() => {
//   setText(GetText(lang));
// }, [lang]);
//------ Language Getter in component
