const texts = {
  en: {
    title: "A simple and tailor-made process, designed just for you.",
    exp1: {
      title: "Write an idea",
      parag: `All process starts with an idea, use your creativity wisely.`,
    },
    exp2: {
      title: "Faire des modifications",
      parag: `Collaborate with artificial intelligence and get results that meet your expectations.`,
    },
    exp3: {
      title: "Made work",
      parag: `Voila, you can shoot and edit your video before moving on to the next one so quickly.`,
    },
  },

  fr: {
    title: "Un processus simple et sur mesure, conçu juste pour vous.",
    exp1: {
      title: "Ecrire une idée",
      parag: `Tous processus commence par une idée, employer votre créativité à bon escient.`,
    },
    exp2: {
      title: "Faire des modifications",
      parag: `Collaborer avec l'intelligence artificielle et obtenez des résultats à la hauteurs de vos attentes.`,
    },
    exp3: {
      title: "Travail effectué",
      parag: `Voila, vous pouvez tourner et monter votre vidéo avant de déja passer à la prochaine aussi rapidement.`,
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
