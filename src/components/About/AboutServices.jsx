import React from "react";

const servicesData = [
  {
    icon: "img/icon/s01.png",
    bgIcon: "img/icon/sb01.png",
    title: "Architecture",
    description:
      "Thoughtfully planned designs that combine modern aesthetics with practical space utilization—tailored to suit your lifestyle or business needs.",
  },
  {
    icon: "img/icon/s02.png",
    bgIcon: "img/icon/sb02.png",
    title: "Construction",
    description:
      "From the ground up, we deliver robust and enduring builds—executed with engineering precision and strict quality control.",
  },
  {
    icon: "img/icon/s03.png",
    bgIcon: "img/icon/sb03.png",
    title: "Equipment",
    description:
      "Equipped with modern tools and technology, we ensure speed, safety, and superior finish in every project.",
  },
  {
    icon: "img/icon/s04.png",
    bgIcon: "img/icon/sb04.png",
    title: "Renovation",
    description:
      "Give your space a second life. We manage everything from structural upgrades to style enhancements with a fresh, forward-thinking approach.",
  },
  {
    icon: "img/icon/s05.png",
    bgIcon: "img/icon/sb05.png",
    title: "Sanitary",
    description:
      "Our sanitary works combine functionality and hygiene—ensuring your plumbing and water systems meet the highest standards.",
  },
  {
    icon: "img/icon/s06.png",
    bgIcon: "img/icon/sb06.png",
    title: "Insulation",
    description:
      "Keep your spaces comfortable and energy-efficient with our high-performance insulation that protects against weather and reduces energy waste.",
  },
];

function AboutServices() {
  return (
    <section className="services-area gray-bg pt-120 pb-90">
      <div className="container">
        <div className="section-title text-center">
          <div className="border-title">
            <h1>Services</h1>
          </div>
          <h5>Our Services</h5>
          <h2>we are expert in</h2>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="services-box text-center mb-30">
                <div className="services-box-thumb mb-25">
                  <img src={service.icon} alt="icon" />
                  <div className="box-thumb-bg">
                    <img src={service.bgIcon} alt="background icon" />
                  </div>
                </div>
                <div className="services-box-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <a className="sevices-btn" href="#">
                    Read More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
