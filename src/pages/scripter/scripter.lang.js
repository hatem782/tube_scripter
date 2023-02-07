let items_en = [
  { title: "Excited", value: "excited" },
  { title: "Professional", value: "professional" },
  { title: "Funny", value: "funny" },
  { title: "Encouraging", value: "encouraging" },
  { title: "Dramatic", value: "dramatic" },
  { title: "Witty", value: "witty" },
  { title: "Sarcastic", value: "sarcastic" },
  { title: "Engaging", value: "engaging" },
  { title: "Creative", value: "creative" },
];

let items_fr = [
  { title: "Excitée", value: "excited" },
  { title: "Professionnelle", value: "professional" },
  { title: "Drôle", value: "funny" },
  { title: "Encourageante", value: "encouraging" },
  { title: "Spectaculaire", value: "dramatic" },
  { title: "Spirituelle", value: "witty" },
  { title: "Sarcastique", value: "sarcastic" },
  { title: "Engageante", value: "engaging" },
  { title: "Créative", value: "creative" },
];

const texts = {
  en: {
    YouTube_Scripter: "YouTube Scripter",
    Tiktok_Scripter: "Tiktok Scripter",
    Key_words: "Key words",
    Description: "Description",
    Generate: "Generate",

    Title: "Title",
    Video_paragraph: "Video paragraph : ",
    Hooks: "Hooks : ",
    Video_description: "Video description : ",
    Video_intro: "Video intro",

    french: "French",
    english: "English",

    items: items_en,
  },

  fr: {
    YouTube_Scripter: "Scénariste YouTube",
    Tiktok_Scripter: "Scénariste Tiktok",
    Key_words: "Mots Clés",
    Description: "Description",
    Generate: "Générer",

    Title: "Titre",
    Video_paragraph: "Paragraphe vidéo : ",
    Hooks: "Hooks : ",
    Video_description: "Description vidéo : ",
    Video_intro: "Intro vidéo",

    french: "Français",
    english: "Anglais",
    items: items_fr,
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
