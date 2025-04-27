import React from "react";
import ArchitectureImg from "../../../src/assets/img/services/Architecture.jpg";


import { Link } from "react-router-dom";

const ServicesData = () => {
  const backgroundImage = "url(../src/assets/img/services/services02.jpg)";
  return (
    <div>
      {/* ===Nav Section=== */}
      <section
        className="page-title-area pt-160 pb-160"
        data-overlay="8"
        style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title text-center">
                <div className="border-title">
                  <h1>Project</h1>
                </div>
                <h1>Project Details</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Project Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===Body Section=== */}
      <section className="services-details pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 pr-25">
              <div className="s-details-single mb-40">
                <div className="s-details-thumb">
                  {/* <img src={} alt="Architecture" /> */}
                </div>
                <div className="s-details-text">
                  <h2>High Quality Construction</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>

                  <div className="s-box-wrapper pt-30 pb-15">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="s-details-box mb-45">
                          <div className="s-details-icon">
                            <img src="../src/assets/img/icon/sh01.png" alt="" />
                          </div>
                          <div className="s-dets-box-text-right">
                            <p>project</p>
                            <p>analysis</p>
                          </div>
                          <div className="s-dtls-box-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="s-details-box mb-45">
                          <div className="s-details-icon">
                            <img src="../src/assets/img/icon/sh02.png" alt="" />
                          </div>
                          <div className="s-dets-box-text-right">
                            <p>project</p>
                            <p>costing</p>
                          </div>
                          <div className="s-dtls-box-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="s-details-box mb-45">
                          <div className="s-details-icon">
                            <img src="../src/assets/img/icon/sh03.png" alt="" />
                          </div>
                          <div className="s-dets-box-text-right">
                            <p>project</p>
                            <p>planning</p>
                          </div>
                          <div className="s-dtls-box-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="s-details-box mb-45">
                          <div className="s-details-icon">
                            <img src="../src/assets/img/icon/sh04.png" alt="" />
                          </div>
                          <div className="s-dets-box-text-right">
                            <p>project</p>
                            <p>strategy</p>
                          </div>
                          <div className="s-dtls-box-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="s-details-thumb mb-30">
                    {/* <img src={Meet} alt="Services" /> */}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam dolores voluptatibus optio similique corrupti
                    veritatis quis obcaecati provident excepturi, aut voluptate
                    quisquam quibusdam ducimus. Tempora est ducimus, corrupti
                    voluptas incidunt quasi id praesentium ullam accusantium
                    quos distinctio. Eum laborum dignissimos, placeat libero est
                    qui consectetur perspiciatis officiis hic quasi voluptatum
                    maxime quisquam cupiditate, a vero ad porro reprehenderit
                    eaque ea suscipit odio aperiam aliquam harum consequuntur!
                    Non labore laborum sapiente sequi inventore sint tempora
                    ipsum est ea. Nesciunt, at laudantium est vel esse facere
                    dicta quae molestias ab, aliquid rerum expedita, corporis
                    ducimus unde non veniam. Cumque, dolorem! Cumque, soluta.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="s-detls-right">
                <div className="services-sidebar mb-40">
                  <div className="services-title">
                    <h2>Our Services</h2>
                  </div>
                  <ul>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd01.png" alt="" />
                        <a href="#">Construction</a>
                      </div>
                    </li>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd02.png" alt="" />
                        <a href="#">Architecture</a>
                      </div>
                    </li>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd03.png" alt="" />
                        <a href="#">Equipment</a>
                      </div>
                    </li>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd04.png" alt="" />
                        <a href="#">Renovation</a>
                      </div>
                    </li>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd05.png" alt="" />
                        <a href="#">Isolation</a>
                      </div>
                    </li>
                    <li>
                      <div className="services-link">
                        <img src="../src/assets/img/icon/sd06.png" alt="" />
                        <a href="#">Sanitary</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===Brand Carousel=== */}
      <section className="brand-area gray-bg pt-90 pb-90">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="brand-active owl-carousel">
                <div className="single-brand">
                  <a className="partner-logo" href="#">
                    <img
                      className="before-image"
                      src="img/brand/brand-01.png"
                      alt="brand"
                    />
                    <img
                      className="after-image"
                      src="img/brand/brand-01.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <div className="single-brand">
                  <a className="partner-logo" href="#">
                    <img
                      className="before-image"
                      src="img/brand/brand-02.png"
                      alt="brand"
                    />
                    <img
                      className="after-image"
                      src="img/brand/brand-02.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <div className="single-brand">
                  <a className="partner-logo" href="#">
                    <img
                      className="before-image"
                      src="img/brand/brand-03.png"
                      alt="brand"
                    />
                    <img
                      className="after-image"
                      src="img/brand/brand-03.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <div className="single-brand">
                  <a className="partner-logo" href="#">
                    <img
                      className="before-image"
                      src="src/assets/img/brand/brand-04.png"
                      alt="brand"
                    />
                    <img
                      className="after-image"
                      src="img/brand/brand-04.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <div className="single-brand">
                  <a className="partner-logo" href="#">
                    <img
                      className="before-image"
                      src="img/brand/brand-05.png"
                      alt="brand"
                    />
                    <img
                      className="after-image"
                      src="img/brand/brand-05.png"
                      alt="brand"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesData;
