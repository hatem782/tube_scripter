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
  { title: "1-3 minutes", value: "p-1" },
  { title: "4-6 minutes", value: "p-2" },
  { title: "7-9 minutes", value: "p-3" },
  { title: "10-12 minutes", value: "p-4" },
  { title: "13-15 minutes", value: "a-1" },
  { title: "16-18 minutes", value: "a-2" },
  { title: "20-24 minutes", value: "a-3" },
  { title: "25-30 minutes", value: "a-4" },
];

let Tik_minutes = [
  { title: "1-3 minutes", value: "t-1" },
  { title: "4-6 minutes", value: "t-2" },
  { title: "7-9 minutes", value: "t-3" },
];

let minutesTk = [
  { title: "30 seconds", value: "t-1" },
  { title: "1 minute", value: "t-2" },
  { title: "1 minute 30 seconds", value: "t-3" },
];

const texts = {
  en: {
    YouTube_Scripter: "YouTube Scripter",
    Tiktok_Scripter: "Tiktok Scripter",
    Key_words: "Key words",
    Description: "Description :",
    Generate: "Generate",
    EditChat: "Personalize in your style",
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
    Content: "Script",
    Reload: " Reload",
    textarea: "History of McDonald's",
    minutesTk: minutesTk,
  },

  fr: {
    YouTube_Scripter: "YouTube  Script",
    Tiktok_Scripter: "Tiktok  Script",
    EditChat: "Personnalisez dans votre style",

    Key_words: "Mots Clés",
    Description: "Description :",
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
    Content: "Script",
    Reload: " Relancer",
    textarea: "histoire de  McDonald's",
    Tik_minutes: Tik_minutes,
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
