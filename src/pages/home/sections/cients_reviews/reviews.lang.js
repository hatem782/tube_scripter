const texts = {
  en: {
    title_p1: "1000+ Customers",
    title_p2: "loves ",
  },

  fr: {
    title_p1: "1000+ Clients",
    title_p2: "adorent",
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
