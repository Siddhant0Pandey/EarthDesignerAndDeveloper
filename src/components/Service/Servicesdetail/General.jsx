import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import ArchitectureImg from "../../../assets/img/services/general.jpg";
import Meet from "../../../assets/img/services/general2.jpg";

const General = () => {
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
                <h1>General Construction</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      General Construction
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
                  <img src={ArchitectureImg} alt="General Construction" />
                </div>
                <div className="s-details-text">
                  <h2>Building Strong Foundations for the Future</h2>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, our
                    General Construction services offer a full range of
                    solutions designed to bring your architectural visions to
                    life. From the initial groundbreaking to the final touches,
                    we handle every aspect of the building process with
                    dedication, precision, and craftsmanship.
                  </p>
                  <p>
                    Our experienced teams are equipped to manage residential,
                    commercial, and industrial projects of all sizes. We believe
                    in delivering not just structures, but lasting value,
                    sustainability, and excellence in every project we
                    undertake.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        { icon: "sh01.png", title: "Site Preparation" },
                        {
                          icon: "sh02.png",
                          title: "Foundation & Structural Work",
                        },
                        {
                          icon: "sh03.png",
                          title: "Building Construction",
                        },
                        {
                          icon: "sh04.png",
                          title: "Finishing & Handover",
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
                                Our general construction services ensure expert
                                handling at every stage — from site preparation
                                and structure building to delivering a
                                ready-to-use facility with high-quality
                                finishes.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={Meet} alt="General Construction Team" />
                  </div>

                  <p>
                    We utilize cutting-edge technologies, modern construction
                    techniques, and industry best practices to guarantee
                    structural integrity, energy efficiency, and aesthetic
                    appeal. Our client-focused approach ensures your project
                    requirements, timelines, and budgets are met without
                    compromise.
                  </p>
                  <p>
                    Whether it’s new construction, expansion, or renovation, our
                    comprehensive services cater to every detail — including
                    planning, material selection, project supervision, and final
                    inspections.
                  </p>
                  <p>
                    Partner with <strong>Earth Designer and Developer</strong>{" "}
                    for your next construction project and experience a
                    seamless, transparent, and high-quality building process —
                    where your vision is built stronger, faster, and smarter.
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
                      "Site Work & Excavation",
                      "Structural Concrete & Steel",
                      "Complete Building Construction",
                      "Interior & Exterior Finishing",
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

export default General;
