import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetText from "./servs.lang";
import styles from "./servs.module.scss";

import ServCard from "../../../../components/cards/serv_card/ServCard";

import idea from "../../../../assets/svg/servs/idea.svg";
import click from "../../../../assets/svg/servs/click.svg";
import fast_time from "../../../../assets/svg/servs/fast-time.svg";
import people from "../../../../assets/svg/servs/people.svg";

function OurServs() {
  const lang = useSelector((state) => state?.LangReducer?.lang);
  const [text, setText] = useState(GetText(lang));
  useEffect(() => {
    setText(GetText(lang));
  }, [lang]);

  return (
    <div className={styles.main}>
      <ServCard img={idea} title={text.t1} description={text.d1} />
      <ServCard img={click} title={text.t2} description={text.d2} />
      <ServCard img={fast_time} title={text.t3} description={text.d3} />
      <ServCard img={people} title={text.t4} description={text.d4} />
    </div>
  );
}

export default OurServs;
