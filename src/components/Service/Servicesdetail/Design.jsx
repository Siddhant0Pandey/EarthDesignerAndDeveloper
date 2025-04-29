import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import DesignBuildImg from "../../../assets/img/services/design.jpg";
import TeamImg from "../../../assets/img/services/design2.jpg";

const Design = () => {
  const backgroundImage = "url(/img/services02.jpg)";

  return (
    <div>
      {/* === Navigation Section === */}
      <section
        className="page-title-area pt-160 pb-160"
        data-overlay="8"
        style={{ backgroundImage, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title text-center">
                <div className="border-title">
                  <h1>Services</h1>
                </div>
                <h1>Design Build</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Design Build
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Details Section === */}
      <section className="services-details pt-120 pb-80">
        <div className="container">
          <div className="row">
            {/* Left Side Content */}
            <div className="col-xl-8 col-lg-8 pr-25">
              <div className="s-details-single mb-40">
                <div className="s-details-thumb">
                  <img src={DesignBuildImg} alt="Design Build" />
                </div>
                <div className="s-details-text">
                  <h2>Integrated Solutions from Concept to Completion</h2>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, our
                    Design-Build services combine architectural design and
                    construction under one streamlined process, reducing risk,
                    saving time, and optimizing project outcomes.
                  </p>
                  <p>
                    We manage the full project lifecycle—from initial planning
                    and conceptualization to permits, construction, and final
                    delivery—ensuring seamless communication, accountability,
                    and excellence every step of the way.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        {
                          icon: "sh01.png",
                          title: "Project Planning & Feasibility",
                        },
                        {
                          icon: "sh02.png",
                          title: "Architectural Design",
                        },
                        {
                          icon: "sh03.png",
                          title: "Engineering & Permitting",
                        },
                        {
                          icon: "sh04.png",
                          title: "Construction & Delivery",
                        },
                      ].map((item, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                          <div className="s-details-box mb-45">
                            <div className="s-details-icon">
                              <img
                                src={`/icon/${item.icon}`}
                                alt={item.title}
                              />
                            </div>
                            <div className="s-dets-box-text-right">
                              <p>{item.title}</p>
                            </div>
                            <div className="s-dtls-box-text">
                              <p>
                                Our design-build approach offers a single point
                                of responsibility, fostering collaboration and
                                minimizing delays by integrating design and
                                construction into one cohesive workflow.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={TeamImg} alt="Design Build Team" />
                  </div>

                  <p>
                    We leverage expert in-house designers and experienced
                    builders to align your vision with practical execution,
                    managing all elements to ensure functionality, aesthetics,
                    and efficiency.
                  </p>
                  <p>
                    From residential to commercial developments, our
                    design-build services offer flexibility, transparency, and
                    unmatched value, allowing clients to enjoy a hassle-free
                    building experience.
                  </p>
                  <p>
                    Partner with <strong>Earth Designer and Developer</strong>{" "}
                    for your next project and experience the benefits of an
                    integrated design-build model built around your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Our Construction Services</h2>
                  </div>
                  <ul>
                    {[
                      "Turnkey Construction",
                      "Design Development",
                      "Site Evaluation",
                      "Permit Management",
                    ].map((service, index) => (
                      <li key={index}>
                        <div className="services-link">
                          {index === 4 ? (
                            <IoDocumentsOutline
                              style={{ color: "#FABB9E", fontSize: "20px" }}
                            />
                          ) : (
                            <img
                              src={`/icon/sd0${index + 1}.png`}
                              alt={service}
                            />
                          )}
                          <a href="#">{service}</a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
