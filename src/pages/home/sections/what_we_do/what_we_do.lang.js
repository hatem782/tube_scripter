const texts = {
  en: {
    what_do_we_do: "WHAT DO WE DO ?",
    l1: "Tube Scripter is a generator of",
    l2: "scripts specializing in videos",
    l3: "YouTube.This tool is designed to",
    l4: "be used on any what",
    l5: "video themes",
  },

  fr: {
    what_do_we_do: "QUE FAISONS NOUS ?",
    l1: "Tube Scripter est un générateur de ",
    l2: "scripts spécialisédans les vidéos ",
    l3: "YouTube.Cet outil est conçu pour ",
    l4: "être utilizer sur n'importe quelle ",
    l5: "thèmes de vidéo",
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
