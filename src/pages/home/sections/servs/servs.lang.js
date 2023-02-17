const texts = {
  en: {
    t1: "Increase your production speed",
    d1: "Whether you are young or old, Tube Scripter will save you a lot of time",
    t2: "Save money",
    d2: "Whether it's yours or someone else's, time is precious. Take advantage of the possibilities offered by new technologies",
    t3: "infinite knowledge",
    d3: "Our AI has a database that exceeds human capabilities and is continuously updated",
    t4: "Simply write better",
    d4: "Create your content in more than 24 different languages are English, French, German and Japanese",
  },

  fr: {
    t1: "Augmenter votre vitesse de production",
    d1: "Que vous vous soyez petit ou grand, Tube Scripter vous fera ganger un temps considérable",
    t2: "Economisez de l'argent",
    d2: "Que ce soit le votre ou celui d'un autre le temps est précieux. Profitez des possiblité offertes par les nouvelles technologies",
    t3: "Des connaissances infinie",
    d3: "Notre IA est dotée d'une base données qui dépasse les capacités humaines et est continuellement mise à jour",
    t4: "Ecrivez tout simplement mieux",
    d4: "Créer votre contenu dans + de 24 langues differentes dont l'anglais, le français l'allemand et le japonais",
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
