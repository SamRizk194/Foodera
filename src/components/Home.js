import React from "react";
import Header from "./header/Header";
import Numbers from "./numbers/Numbers";
import Section from "./section-one/Section";
import Sectiontwo from "./section-two/Sectiontwo";
import Sec3rd from "./sec-3/Sec3rd";
import Sec4rd from "./sec-4/Sec4rd";
import Slider from "./../components/slider/Slider";
import Text from "./text/Text";

const Home = () => {
  return (
    <>
      <Header />
      <Numbers />
      <Section />
      <Sectiontwo />
      <Sec3rd />
      <Sec4rd />
      <Slider />
      <Text />
    </>
  );
};
export default Home;
