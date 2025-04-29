import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import ServiceIconImage, { ServiceIconBackground } from "../ServiceIconImage"; // Adjust the import path as needed

const servicesData = [
  {
    icon: (
      <ServiceIconImage
        src="/icon/s01.png"
        alt="Pre-Construction Design icon"
        // style={{ height: "200px", width: "auto" }} // <-- Fix applied here
      />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb01.png"
        alt="Pre-Construction background"
        // style={{ height: "200px", width: "auto" }}
      />
    ),
    title: "Pre-Construction Design",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/pre-construction",
  },
  {
    icon: (
      <ServiceIconImage src="/icon/s02.png" alt="Construction Services icon" />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb02.png"
        alt="Construction Services background"
      />
    ),
    title: "Construction Services",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/construction",
  },
  {
    icon: (
      <ServiceIconImage
        src="/icon/s03.png"
        alt="Construction Management icon"
      />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb03.png"
        alt="Construction Management background"
      />
    ),
    title: "Construction Management",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/management",
  },
  {
    icon: (
      <ServiceIconImage src="/icon/s04.png" alt="General Constructing icon" />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb04.png"
        alt="General Constructing background"
      />
    ),
    title: "General Constructing",
    description:
      "Separated they live in Bookmarks grove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/general",
  },
  {
    icon: (
      <ServiceIconImage
        src="/icon/s03.png"
        alt="Construction Management icon"
      />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb03.png"
        alt="Construction Management background"
      />
    ),
    title: "Building Modeling",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/building",
  },
  {
    icon: (
      <ServiceIconImage
        src="/icon/s01.png"
        alt="Pre-Construction Design icon"
        // style={{ height: "200px", width: "auto" }} // <-- Fix applied here
      />
    ),
    bgIcon: (
      <ServiceIconBackground
        src="/icon/sb01.png"
        alt="Pre-Construction background"
        // style={{ height: "200px", width: "auto" }}
      />
    ),
    title: "Design Build",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: true,
    ReadMore: "services/design",
  },
];

const ServicesCard = () => {
  return (
    <section className="services-area gray-bg pt-120 pb-90">
      <div className="container">
        <div className="section-title text-center">
          <div className="border-title">
            <h1>Services</h1>
          </div>
          <h5>Our Services</h5>
          <h2>We are experts in</h2>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="services-box text-center mb-30">
                <div
                  className="services-box-thumb mb-25"
                  style={{ position: "relative" }}
                >
                  {service.isReactIcon ? (
                    <div style={{ position: "relative", zIndex: 2 }}>
                      {service.icon}
                    </div>
                  ) : (
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontSize: "40rem",
                        width: "200px",
                      }}
                    />
                  )}
                  <div
                    className="box-thumb-bg"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1,
                    }}
                  >
                    {service.isReactIcon ? (
                      service.bgIcon
                    ) : (
                      <img
                        src={service.bgIcon}
                        alt={`${service.title} background icon`}
                      />
                    )}
                  </div>
                </div>
                <div className="services-box-text">
                  <h3 style={{ height: "100px" }}>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.ReadMore && (
                    <Link
                      to={`/${service.ReadMore}`}
                      className="read-more-link"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
