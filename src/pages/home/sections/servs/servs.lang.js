const texts = {
  en: {
    t1: "Lorem Ipsum is simply dummy text of ",
    d1: "Lorem Ipsum is simply dummy text of",
    t2: "Lorem Ipsum is simply dummy text of ",
    d2: "Lorem Ipsum is simply dummy text of",
    t3: "Lorem Ipsum is simply dummy text of ",
    d3: "Lorem Ipsum is simply dummy text of",
    t4: "Lorem Ipsum is simply dummy text of ",
    d4: "Lorem Ipsum is simply dummy text of",
  },

  fr: {
    t1: "Lorem Ipsum est simplement un faux texte de",
    d1: "Lorem Ipsum est simplement un faux texte de",
    t2: "Lorem Ipsum est simplement un faux texte de ",
    d2: "Lorem Ipsum est simplement un faux texte de",
    t3: "Lorem Ipsum est simplement un faux texte de ",
    d3: "Lorem Ipsum est simplement un faux texte de",
    t4: "Lorem Ipsum est simplement un faux texte de ",
    d4: "Lorem Ipsum est simplement un faux texte de",
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
