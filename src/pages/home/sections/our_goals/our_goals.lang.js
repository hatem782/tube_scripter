const texts = {
  en: {
    title: "Millions of people become better writers",
    exp1: {
      title: "Paste text",
      parag: `Tube Scripter is a script generator specialized in YouTube videos.
      This tool is designed to be used on any video theme.`,
    },
    exp2: {
      title: "Start rewriting",
      parag: `Tube Scripter is a script generator specialized in YouTube videos.
      This tool is designed to be used on any video theme.`,
    },
    exp3: {
      title: "Made work",
      parag: `Tube Scripter is a script generator specialized in YouTube videos.
      This tool is designed to be used on any video theme.`,
    },
  },

  fr: {
    title: "Des millions de personnes deviennent de meilleurs écrivains.",
    exp1: {
      title: "Coller le texte",
      parag: `Tube Scripter est un générateur de scripts spécialisé dans les
      vidéos YouTube .Cet outil est conçu pour être utilizer sur
      n'importe quelle thèmes de vidéos.`,
    },
    exp2: {
      title: "Start rewriting",
      parag: `Tube Scripter est un générateur de scripts spécialisé dans les
      vidéos YouTube .Cet outil est conçu pour être utilizer sur
      n'importe quelle thèmes de vidéos.`,
    },
    exp3: {
      title: "Commencer la réécriture",
      parag: `Tube Scripter est un générateur de scripts spécialisé dans les
      vidéos YouTube .Cet outil est conçu pour être utilizer sur
      n'importe quelle thèmes de vidéos.`,
    },
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
