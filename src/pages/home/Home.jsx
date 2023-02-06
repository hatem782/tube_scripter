import React from "react";

import styles from "./home.module.scss";

import Header from "./sections/header/Header";
import Generate from "./sections/generate/Generate";
import OurServs from "./sections/servs/OurServs";
import WhatWeDo from "./sections/what_we_do/WhatWeDo";
import Results from "./sections/our_goals/Results";
import Stats from "./sections/our_stats/Stats";
import OurPlans from "./sections/our_plans/OurPlans";
import Reviews from "./sections/cients_reviews/Reviews";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Generate />
      <OurServs />
      <WhatWeDo />
      <Results />
      <Stats />
      <OurPlans />
      <Reviews />
    </div>
  );
}

export default Home;
