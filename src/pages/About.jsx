import React from "react";
// import AboutHero from "../components/About/AboutHero";
import AboutNav from "../components/About/AboutNav";
import AboutHero2 from "../components/About/AboutHero2";
import AboutFeature from "../components/About/AboutFeature";
import AboutServices from "../components/About/AboutServices";
import ServicesCard from "../components/Service/ServicesCard";

function About() {
  return (
    <>
      <AboutNav />
      <AboutHero2 />
      <AboutFeature />
      <ServicesCard />
    </>
  );
}

export default About;
