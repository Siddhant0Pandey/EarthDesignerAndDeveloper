import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

const servicesData = [
  {
    icon: "src/assets/img/icon/s01.png",
    bgIcon: "src/assets/img/icon/sb01.png",
    title: "Pre-Construction Design",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: false,
    ReadMore: "services/pre-construction",
  },
  {
    icon: "src/assets/img/icon/s02.png",
    bgIcon: "src/assets/img/icon/sb02.png",
    title: "Construction Services",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    isReactIcon: false,
    ReadMore: "services/construction",
  },
  {
    icon: "src/assets/img/icon/s03.png",
    bgIcon: "src/assets/img/icon/sb03.png",
    title: "Construction Management",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    ReadMore: "services/management",
    isReactIcon: false,
  },
  {
    icon: "src/assets/img/icon/s04.png",
    bgIcon: "src/assets/img/icon/sb04.png",
    title: "General Constructing",
    description:
      "Separated they live in Bookmarks grove right at the coast of the Semantics",
    ReadMore: "services/renovation",
    ReadMore: "services/general",
    isReactIcon: false,
  },
  {
    icon: (
      <MdOutlineDesignServices style={{ fontSize: "78px", color: "#FABB9E" }} />
    ),
    bgIcon: (
      <MdOutlineDesignServices
        style={{ fontSize: "150px", color: "#FFE5D0", opacity: 0.3 }}
      />
    ),
    title: "Building Modeling",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    ReadMore: "services/building",
    isReactIcon: true,
  },
  {
    icon: <BiBuildings style={{ fontSize: "78px", color: "#FABB9E" }} />,
    bgIcon: (
      <BiBuildings
        style={{ fontSize: "150px", color: "#FFE5D0", opacity: 0.3 }}
      />
    ),
    title: "Design Build",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    ReadMore: "services/design",
    isReactIcon: true,
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
                      style={{ position: "relative", zIndex: 2 }}
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
                  <h3>{service.title}</h3>
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
