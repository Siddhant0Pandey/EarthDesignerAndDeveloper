import React from "react";

import HomeHero from "../components/Home/HomeHero";
import AboutHero from "../components/About/AboutHero";
import ServiceHero from "../components/Service/ServiceHero";
import ProjectHero from "../components/Project/ProjectHero";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial/Testimonial";
import Feature from "../components/Feature/Feature";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {

  return (
    <>
   <HomeHero/>
   <AboutHero/>
   <ServiceHero/>
   <ProjectHero/>
   <Brand/>
   <Feature/>
   <Testimonial/>
<ContactForm/>
   </>
  );
};

export default Home;
