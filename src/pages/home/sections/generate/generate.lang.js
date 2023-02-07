const texts = {
  en: {
    GENERATED_YOUR_FIRST_SCRIPT: "GENERATED YOUR FIRST SCRIPT",
    try_tubescripter: "Try Tube Scripter for free in just a few clicks",
    How_it_works: "How it works",
  },

  fr: {
    GENERATED_YOUR_FIRST_SCRIPT: "GÉNÉRÉ VOTRE PREMIER SCRIPT",
    try_tubescripter: "Essayer Tube Scripter gratuitement en quelques clique.",
    How_it_works: "Comment ça fonctionne",
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
