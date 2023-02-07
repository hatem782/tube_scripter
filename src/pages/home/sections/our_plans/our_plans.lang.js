import { plans_en, plans_fr } from "./data";

const texts = {
  en: {
    plan: plans_en,
    title: "Several options to ",
    desc: `Tube Scripter is a specialized script generator
    in YouTube videos. This tool is designed to be used
    on any video theme.`,
    choose: "Choose",
  },

  fr: {
    plan: plans_fr,
    title: "Plusieurs options à ",
    desc: `Tube Scripter est un générateur de scripts spécialisé 
    dans les vidéos YouTube .Cet outil est conçu pour être utilizer 
    sur n'importe quelle thèmes de vidéos.`,
    choose: "Choisir",
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
