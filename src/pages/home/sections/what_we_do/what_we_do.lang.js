const texts = {
  en: {
    what_do_we_do: "WHAT DO WE DO ?",
    text: "Tube Scripter est un générateur de scripts spécialisédans les vidéos YouTube.Cet outil est conçu pour être utilizer sur n'importe quelle thèmes de vidéo.",
    click:"Start here"
  },

  fr: {
    what_do_we_do: "QUE FAISONS NOUS ?",
    text: "Tube Scripter est un générateur de scripts spécialisédans les vidéos YouTube.Cet outil est conçu pour être utilizer sur n'importe quelle thèmes de vidéo.",
    click:"Commencer ici"
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
