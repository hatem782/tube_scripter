import React from "react";
import styles from "./servs.module.scss";

import ServCard from "../../../../components/cards/serv_card/ServCard";

import idea from "../../../../assets/svg/servs/idea.svg";
import click from "../../../../assets/svg/servs/click.svg";
import fast_time from "../../../../assets/svg/servs/fast-time.svg";
import people from "../../../../assets/svg/servs/people.svg";

function OurServs() {
  return (
    <div className={styles.main}>
      <ServCard
        img={idea}
        title="Lorem Ipsum is simply dummy text of "
        description="Lorem Ipsum is simply dummy text of"
      />
      <ServCard
        img={idea}
        title="Lorem Ipsum is simply dummy text of "
        description="Lorem Ipsum is simply dummy text of"
      />
      <ServCard
        img={idea}
        title="Lorem Ipsum is simply dummy text of "
        description="Lorem Ipsum is simply dummy text of"
      />
      <ServCard
        img={idea}
        title="Lorem Ipsum is simply dummy text of "
        description="Lorem Ipsum is simply dummy text of"
      />
    </div>
  );
}

export default OurServs;
