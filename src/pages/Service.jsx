import React from "react";
import ServiceNav from "../components/Service/ServiceNav";
import ServicesCard from "../components/Service/ServicesCard";
// import ServiceAbout from "../components/Service/ServiceAbout";
import ServiceCount from "../components/Service/ServiceCount";
import AboutHero2 from "../components/About/AboutHero2";
// import ServiceHero from "../components/Service/ServiceHero";

function Service() {
  return (
    <>
      {/* <ServiceHero /> */}
      <ServiceNav />
      <ServicesCard />
      {/* <ServiceAbout /> */}
      <AboutHero2 />
      <ServiceCount />
    </>
  );
}

export default Service;
