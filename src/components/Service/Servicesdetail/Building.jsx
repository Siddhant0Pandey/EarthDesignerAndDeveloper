import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import BuildingModelingImg from "../../../assets/img/services/building.jpg";
import TeamImg from "../../../assets/img/services/building2.jpg";

const Building = () => {
  const backgroundImage = "url(../src/assets/img/services/services02.jpg)";

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
                <h1>Building Modeling</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Building Modeling
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
                  <img src={BuildingModelingImg} alt="Building Modeling" />
                </div>
                <div className="s-details-text">
                  <h2>Visualizing Tomorrow’s Structures Today</h2>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, our
                    Building Modeling services bring your construction concepts
                    to life through detailed 3D representations, enabling better
                    planning, communication, and decision-making throughout the
                    project lifecycle.
                  </p>
                  <p>
                    We specialize in Building Information Modeling (BIM),
                    offering highly accurate digital representations of physical
                    and functional characteristics. Our models support
                    visualization, simulation, and coordination to reduce errors
                    and ensure project efficiency.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        {
                          icon: "sh01.png",
                          title: "conceptual Design Modeling",
                        },
                        {
                          icon: "sh02.png",
                          title: "Detailed BIM Modeling",
                        },
                        {
                          icon: "sh03.png",
                          title: "Clash Detection & Coordination ",
                        },
                        { icon: "sh04.png", title: "Construction Document" },
                      ].map((item, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                          <div className="s-details-box mb-45">
                            <div className="s-details-icon">
                              <img
                                src={`../src/assets/img/icon/${item.icon}`}
                                alt={item.title}
                              />
                            </div>
                            <div className="s-dets-box-text-right">
                              <p>{item.title}</p>
                            </div>
                            <div className="s-dtls-box-text">
                              <p>
                                From conceptual to construction-ready models, we
                                offer expert modeling services that improve
                                design accuracy, optimize material usage, and
                                streamline collaboration across disciplines.
                                finishes.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={TeamImg} alt="Modeling Team" />
                  </div>

                  <p>
                    Utilizing the latest in BIM software and 3D modeling tools,
                    our team provides high-quality digital models that integrate
                    architectural, structural, and MEP elements — ensuring a
                    unified vision from concept to construction.
                  </p>
                  <p>
                    Our services support architects, engineers, and contractors
                    by improving coordination, reducing rework, and enhancing
                    design visualization and analysis.
                  </p>
                  <p>
                    Choose <strong>Earth Designer and Developer</strong> for
                    precision-driven Building Modeling solutions that power
                    smarter, more collaborative, and cost-effective building
                    outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Modeling Services</h2>
                  </div>
                  <ul>
                    {[
                      "3D Building Modeling",
                      "MEP Coordination",
                      "Construction Drawings",
                      "As-Built Modeling",
                    ].map((service, index) => (
                      <li key={index}>
                        <div className="services-link">
                          {index === 4 ? (
                            <IoDocumentsOutline
                              style={{ color: "#FABB9E", fontSize: "20px" }}
                            />
                          ) : (
                            <img
                              src={`../src/assets/img/icon/bm0${index + 1}.png`}
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

export default Building;
