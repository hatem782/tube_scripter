import React from "react";

import Header from "./sections/header/Header";
import Generate from "./sections/generate/Generate";
import OurServs from "./sections/servs/OurServs";

function Home() {
  return (
    <div>
      <Header />
      <Generate />
      <OurServs />
    </div>
  );
}

export default Home;
