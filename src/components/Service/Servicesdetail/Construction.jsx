import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

import ArchitectureImg from "../../../assets/img/services/const.jpg";
import Meet from "../../../assets/img/services/const2.jpg";

const Construction = () => {
  const backgroundImage = "url(../src/assets/img/services/services02.jpg)"; // Consider importing this image if you want to optimize bundling.

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
            {/* Left Side Content */}
            <div className="col-xl-8 col-lg-8 pr-25">
              <div className="s-details-single mb-40">
                <div className="s-details-thumb">
                  <img src={ArchitectureImg} alt="Construction" />
                </div>
                <div className="s-details-text">
                  <h2>Building Excellence from the Ground Up</h2>
                  <p>
                    At <strong>Earth Designer and Developer</strong>, we believe
                    that construction is more than just building structures—it's
                    about shaping lasting foundations for families, businesses,
                    and communities. With a commitment to quality, safety, and
                    innovation, we deliver customized construction solutions for
                    residential, commercial, and industrial projects of all
                    scales.
                  </p>
                  <p>
                    Our experienced team of engineers, architects, and skilled
                    craftsmen work collaboratively to bring your vision to life.
                    From groundbreaking to final handover, we ensure that every
                    detail is meticulously executed, using the finest materials
                    and the latest construction technologies.
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      {[
                        { icon: "sh01.png", title: "Site Preparation" },
                        { icon: "sh02.png", title: "Structural Engineering" },
                        { icon: "sh03.png", title: "Quality Assurance" },
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
                                Every phase of our construction process—from
                                land assessment to project delivery—is guided by
                                precision planning, robust safety standards, and
                                a commitment to excellence.
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
                    Our core construction services include site excavation,
                    concrete and steel works, structural framework, roofing, and
                    interior finishing. We adhere to rigorous engineering
                    standards, using modern machinery and eco-conscious
                    practices to build spaces that are not only strong but also
                    sustainable.
                  </p>
                  <p>
                    Sustainability is at the heart of our construction
                    philosophy. We prioritize energy-efficient designs,
                    eco-friendly materials, and smart building technologies that
                    reduce environmental impact while delivering maximum value
                    for our clients.
                  </p>
                  <p>
                    Whether you are planning to build a dream home, a thriving
                    commercial space, or a robust industrial facility,{" "}
                    <strong>Earth Designer and Developer</strong> is your
                    trusted partner—delivering excellence, reliability, and
                    innovation every step of the way.
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
    </div>
  );
};

export default Construction;
