const texts = {
  en: {
    title: "Millions of people become better writers",
    circle1: {
      title: "Time saved",
      parag: "Millions of people trust the time saver",
    },
    circle2: {
      title: "Million",
      parag: "Millions of people trust the time saver",
    },
    circle3: {
      title: "Words",
      parag: "Millions of people trust the time saver",
    },
  },

  fr: {
    title: "Des millions de personnes deviennent de meilleurs écrivains",
    circle1: {
      title: "Temps gagné",
      parag: "Des millions de personnes font confiance au gain de temps",
    },
    circle2: {
      title: "Million",
      parag: "Des millions de personnes font confiance au gain de temps",
    },
    circle3: {
      title: "Mots",
      parag: "Des millions de personnes font confiance au gain de temps",
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
