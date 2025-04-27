import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import ArchitectureImg from "../../../assets/img/services/Architecture.jpg";
import Meet from "../../../assets/img/services/meet.jpg";

const PreConstruction = () => {
  const backgroundImage = "url(../src/assets/img/services/services02.jpg)"; // Consider importing this if needed

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
                <h1>Construction</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Construction
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
            <div className="col-xl-8 col-lg-8 pr-25">
              <div className="s-details-single mb-40">
                <div className="s-details-thumb">
                  <img src={ArchitectureImg} alt="Construction" />
                </div>
                <div className="s-details-text">
                  <h2>Building Strong Foundations</h2>
                  <p>
                    At Earth Designer and Developer, we turn architectural
                    visions into reality with expert construction services
                    tailored for residential, commercial, and industrial
                    projects. Our commitment is simple: deliver quality
                    craftsmanship, ensure safety, and complete projects on time
                    and within budget.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        { icon: "sh01.png", title: "Site Preparation" },
                        { icon: "sh02.png", title: "Structural Engineering" },
                        { icon: "sh03.png", title: "Quality Control" },
                        { icon: "sh04.png", title: "Project Management" },
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
                                Our construction process is guided by precision
                                planning, robust materials, and a highly skilled
                                team to ensure every project stands the test of
                                time.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={Meet} alt="Construction Teamwork" />
                  </div>
                  <p>
                    At <strong>Earth Designer and Developer</strong>,
                    construction is not just about assembling bricks and mortar
                    — it's about building spaces where life thrives and
                    businesses grow. We specialize in full-spectrum construction
                    services including excavation, concrete work, steel
                    framework, roofing, and finishing works. Our team adheres
                    strictly to engineering standards and safety regulations,
                    ensuring durability and peace of mind for our clients.
                  </p>
                  <p>
                    We also prioritize the use of sustainable construction
                    practices, leveraging energy-efficient materials and smart
                    technologies to reduce environmental impact. Every project
                    we undertake is a reflection of our passion for excellence,
                    innovation, and craftsmanship. Whether it's constructing a
                    family home, a corporate office, or an industrial warehouse,
                    we are your trusted partner from groundbreaking to grand
                    opening.
                  </p>
                </div>
              </div>
            </div>

            {/* === Sidebar Section === */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Construction Services</h2>
                  </div>
                  <ul>
                    {[
                      "Residential Construction",
                      "Commercial Building",
                      "Industrial Facilities",
                      "Renovation & Remodeling",
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

      {/* === Brand Section (Optional) === */}
      {/* Uncomment if you want */}
      {/* <section className="brand-area gray-bg pt-90 pb-90">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="brand-active owl-carousel">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="single-brand">
                    <a className="partner-logo" href="#">
                      <img
                        className="before-image"
                        src={`src/assets/img/brand/brand-0${num}.png`}
                        alt={`Brand ${num}`}
                      />
                      <img
                        className="after-image"
                        src={`src/assets/img/brand/brand-0${num}.png`}
                        alt={`Brand ${num}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default PreConstruction;
