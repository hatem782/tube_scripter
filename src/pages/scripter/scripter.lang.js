let items_en = [
  { title: "14 years", value: "excited" },
  { title: "14-24 years", value: "creative" },
  { title: "25-35 years", value: "encouraging" },
  { title: "+35 years", value: "professional" },
];

let items_fr = [
  { title: "14 ans", value: "excited" },
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
    YouTube_Scripter: "YouTube Scripter",
    Tiktok_Scripter: "Tiktok Scripter",
    Key_words: "Key words",
    Description: "Description :",
    Generate: "Generate",

    Title: "Title",
    Video_paragraph: "Script :",
    Hooks: "Hooks : ",
    Video_description: "Video description : ",
    Video_intro: "Video intro",

    french: "French",
    english: "English",
    mood:"Target audience age group :",
    items: items_en,
    length:"Video length",
    minutes
  },

  fr: {
    YouTube_Scripter: "YouTube  Script",
    Tiktok_Scripter: "Tiktok  Script",
    Key_words: "Mots Clés",
    Description: "Description :",
    Generate: "Générer",

    Title: "Titre",
    Video_paragraph: "Script :",
    Hooks: "Hooks : ",
    Video_description: "Description vidéo : ",
    Video_intro: "Intro vidéo",
    mood:"Audience ciblé tranche d'age :",
    french: "Français",
    english: "Anglais",
    items: items_fr,
    length:"Longeur de la video",
    minutes
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
