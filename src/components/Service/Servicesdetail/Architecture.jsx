import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import ArchitectureImg from "../../../assets/img/services/Architecture.jpg";
import Meet from "../../../assets/img/services/meet.jpg";

const Architecture = () => {
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
                <h1>Architecture</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Architecture
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
                  <img src={ArchitectureImg} alt="Architecture" />
                </div>
                <div className="s-details-text">
                  <h2>High Quality Construction</h2>
                  <p>
                    We provide innovative architectural design and planning
                    services to meet our clients' needs for residential,
                    commercial, and mixed-use spaces. Our team ensures design
                    integrity and sustainability across all projects.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        { icon: "sh01.png", title: "Project Analysis" },
                        { icon: "sh02.png", title: "Project Costing" },
                        { icon: "sh03.png", title: "Project Planning" },
                        { icon: "sh04.png", title: "Project Strategy" },
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
                                Our approach involves meticulous planning and
                                strategic execution to deliver superior results.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    <img src={Meet} alt="Team Meeting" />
                  </div>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, we believe
                    that architecture is more than just creating structures —
                    it's about shaping environments that inspire, endure, and
                    elevate the way people live and work. Our architectural
                    services are rooted in creativity, precision, and a deep
                    respect for sustainability. Every project begins with a
                    thorough understanding of our clients' needs, dreams, and
                    the unique context of the site. From concept development and
                    spatial planning to final execution, we focus on delivering
                    designs that balance aesthetics, function, and environmental
                    responsibility. Our team of experienced architects and
                    designers bring a collaborative approach to each project,
                    ensuring a seamless process from vision to reality. Whether
                    it's a modern residential home, a dynamic commercial hub, or
                    a large-scale community development, we bring innovative
                    ideas and practical solutions to the table. At Earth
                    Designer and Developer, we are committed to using
                    eco-friendly materials, incorporating natural elements, and
                    designing with future generations in mind. We don't just
                    design buildings — we craft spaces that tell stories, foster
                    connection, and stand the test of time. Trust us to
                    transform your space into a signature piece of architecture
                    that reflects your values and enhances your lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* === Sidebar Section === */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Our Services</h2>
                  </div>
                  <ul>
                    {[
                      "Consultation & Briefing",
                      "Concept Design & 3D Visualization",
                      "On-site Supervision & Coordination",
                      "Design Development",
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

      {/* === Brand Section === */}
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

export default Architecture;
