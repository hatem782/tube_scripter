const texts = {
  en: {
    title: "Millions of People Become Top Content Creators",
    click:"Create a script",
    circle1: {
      title: "Time saved",
      
    },
    circle2: {
      title: "script created",
      
    },
    circle3: {
      title: "Words generated",
      
    },
  },

  fr: {
    title: "Des millions de personnes deviennent des meilleurs créateurs de contenu.",
    click:"créer un script",
    circle1: {
      title: "Temps gagné",
     
    },
    circle2: {
      title: "Script crée",
     
    },
    circle3: {
      title: "Mots généré",
     
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
