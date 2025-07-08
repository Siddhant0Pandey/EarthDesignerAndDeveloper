import React from "react";

import HomeHero from "../components/Home/HomeHero";
import ServiceHero from "../components/Service/ServiceHero";
import ProjectHero from "../components/Project/ProjectHero";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial/Testimonial";
import Feature from "../components/Feature/Feature";
import ContactForm from "../components/Contact/ContactForm";
import AboutHero2 from "../components/About/AboutHero2";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
   <HomeHero/>
   <AboutHero2/>
   <ServiceHero/>
   <ProjectHero/>
   <Brand/>
   <Feature/>
   <Testimonial/>
<ContactForm/>
   </div>
  );
};

export default Home;
