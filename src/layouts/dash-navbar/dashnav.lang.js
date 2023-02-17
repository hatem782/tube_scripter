const texts = {
  en: {
    home: "Home",
    Script: "Script",
    ChatGpt: "TubeChat",
    Library: "Library",
    Contact: "Contact",
    Setting: "Setting",
    Logout: "Logout",
  },

  fr: {
    home: "Accueil",
    Script: "Script",
    ChatGpt: "TubeChat",
    Library: "Bibliothèque",
    Contact: "Contact",
    Setting: "Paramétre",
    Logout: "Déconnection",
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
