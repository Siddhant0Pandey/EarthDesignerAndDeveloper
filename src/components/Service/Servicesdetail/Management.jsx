import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import ArchitectureImg from "../../../assets/img/services/management.jpg";
import Meet from "../../../assets/img/services/management2.jpg";

const Management = () => {
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
                <h1>Construction Management</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Construction Management
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
                  <img src={ArchitectureImg} alt="Construction Management" />
                </div>
                <div className="s-details-text">
                  <h2>Expert Construction Management for Seamless Projects</h2>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, we provide
                    comprehensive construction management services that ensure
                    every project is delivered on time, within budget, and to
                    the highest quality standards. Our role goes beyond
                    building; we oversee every stage of the construction process
                    to guarantee success from conception to completion.
                  </p>
                  <p>
                    Our dedicated management team coordinates architects,
                    engineers, contractors, and suppliers, maintaining clear
                    communication and a strong workflow. We meticulously plan,
                    monitor, and control all project activities, focusing on
                    minimizing risks, optimizing resources, and exceeding client
                    expectations.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        { icon: "sh01.png", title: "Project Planning" },
                        { icon: "sh02.png", title: "Cost Management" },
                        { icon: "sh03.png", title: "Quality Control" },
                        { icon: "sh04.png", title: "Risk Assessment" },
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
                                Our construction management services emphasize
                                detailed scheduling, budget optimization,
                                quality assurance, and proactive risk management
                                at every stage.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={Meet} alt="Construction Team Management" />
                  </div>

                  <p>
                    From pre-construction planning to final project delivery, we
                    are committed to creating efficient, cost-effective, and
                    well-organized processes. Our proactive approach ensures
                    potential challenges are identified early and resolved
                    swiftly, saving you time and money.
                  </p>
                  <p>
                    We integrate modern project management tools, sustainable
                    practices, and proven methodologies to deliver results that
                    align with your vision and business goals.
                  </p>
                  <p>
                    Partner with <strong>Earth Designer and Developer</strong>{" "}
                    to experience construction management that turns complex
                    projects into success stories — built on trust,
                    transparency, and excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Construction Management Services</h2>
                  </div>
                  <ul>
                    {[
                      "Project Planning & Scheduling",
                      "Budget & Cost Control",
                      "Contractor Coordination",
                      "Quality & Safety Management",
                    ].map((service, index) => (
                      <li key={index}>
                        <div className="services-link">
                          {index === 4 ? (
                            <IoDocumentsOutline
                              style={{ color: "#FABB9E", fontSize: "20px" }}
                            />
                          ) : (
                            <img
                              src={`../src/assets/img/icon/sd0${index + 1}.png`}
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

export default Management;
