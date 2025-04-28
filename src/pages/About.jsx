import React from "react";
import AboutNav from "../components/About/AboutNav";
import AboutHero2 from "../components/About/AboutHero2";
import OurTeam from "../components/About/OurTeam";
import MissionAndVision from "../components/About/MissionAndGoals";
import AboutOurCoreValues from "../components/About/AboutOurCoreValues";
import AboutFounderMessage from "../components/About/AboutFounderMessage";

function About() {
  return (
    <>
      <AboutNav />
      <AboutHero2 />
      <OurTeam />
      <MissionAndVision />
      <AboutOurCoreValues />
      <AboutFounderMessage />
    </>
  );
}

export default About;
