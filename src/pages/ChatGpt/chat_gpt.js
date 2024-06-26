import { langs_en, langs_fr } from "../../assets/json/languages/languages";

let items_en = [
  { title: "-14 years", value: "excited" },
  { title: "14-24 years", value: "creative" },
  { title: "25-35 years", value: "encouraging" },
  { title: "+35 years", value: "professional" },
];

let items_fr = [
  { title: "-14 ans", value: "excited" },
  { title: "14-24 ans", value: "creative" },
  { title: "25-35 ans", value: "encouraging" },
  { title: "+35 ans", value: "professional" },
];

let minutes = [
  { title: "1-3 minutes", value: "1" },
  { title: "4-6 minutes", value: "2" },
  { title: "7-9 minutes", value: "3" },
  { title: "10-12 minutes", value: "4" },
  { title: "13-15 minutes", value: "5" },
  { title: "16-18 minutes", value: "6" },
  { title: "20-24 minutes", value: "7" },
  { title: "25-30 minutes", value: "8" },
];

const texts = {
  en: {
    YouTube_Scripter: "TubeChat",
    Tiktok_Scripter: "TubeChat",
    Key_words: "Key words",
    Description: "Text :",
    Generate: "Generate",

    Title: "Title",
    Video_paragraph: "Script :",
    Hooks: "Hooks : ",
    Video_description: "Description : ",
    Video_intro: "Introduction : ",

    french: "French",
    english: "English",
    mood: "Target audience :",
    Target_audience_age_group: "Target audience",
    items: items_en,
    length: "Video length",
    langs: langs_en,
    languages: "Languages",
    duration: "Duration",
    minutes: minutes,
    ChatGpt: "Chat-Scripter",
    Reload: " Reload",
    textarea: "History of McDonald's",
  },

  fr: {
    YouTube_Scripter: "TubeChat",
    Tiktok_Scripter: "TubeChat",
    Key_words: "Mots Clés",
    Description: "Text :",
    Generate: "Générer",

    Title: "Titre",
    Video_paragraph: "Script :",
    Hooks: "Hooks : ",
    Video_description: "Description : ",
    Video_intro: "Introduction : ",
    mood: "Audience ciblé :",
    french: "Français",
    english: "Anglais",
    Target_audience_age_group: "Audience ciblé",
    items: items_fr,
    length: "Longeur de la video",
    langs: langs_fr,
    languages: "Langues",
    duration: "Durée",
    minutes: minutes,
    ChatGpt: "Chat-Scripter",
    Reload: " Relancer",
    textarea: "histoire de  McDonald's",
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
