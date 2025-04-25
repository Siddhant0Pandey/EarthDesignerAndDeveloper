import React, { useState } from "react";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/img/bg/about-bg.png"; // relative path based on component location

function AboutHero2() {
  const [activeTab] = useState("nav-01");

  const tabContent = {
    "nav-01": {
      paragraphs: [
        `At Earth Builder & Designer, we don't just construct buildings—we create enduring landmarks. With innovation at our core and excellence in every detail, we’re committed to shaping skylines and strengthening communities.`,
        `Whether it’s a residential complex, commercial infrastructure, or urban development, our team brings precision, passion, and purpose to every project. We believe great ideas, combined with great execution, build more than structures—they build futures.`,
      ],
    },
    "nav-02": {
      paragraphs: [
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.`,
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..`,
      ],
    },
    "nav-03": {
      paragraphs: [
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.`,
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..`,
      ],
    },
  };

  return (
    <section className="about-area pb-90">
      <div className="container">
        <div className="about-wrapper pt-120">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left pos-rel">
                <div className="border-title-2">
                  <h1>About</h1>
                </div>
                <div className="about-title mb-20">
                  <h5>About us !</h5>
                  <h2>
                    We believe in the power of great ideas<span>.</span>
                  </h2>
                </div>
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
                <ul className="about-info mt-30 mb-30">
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>End-to-end construction solutions tailored to your vision</h5>
                    </div>
                  </li>
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>Timely project delivery with uncompromising quality</h5>
                    </div>
                  </li>
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>Sustainable practices that support long-term growth</h5>
                    </div>
                  </li>
                </ul>
                <div className="about-btn pt-20">
                  <Link to="/service-details" className="thm-btn">
                    Learn More
                  </Link>
                  <Link to="/about" className="about-l-btn">
                    Learn More <i className="ti-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right pos-rel">
                <div className="about-right-content">
                  <h1>
                    29<span>+</span>
                  </h1>
                  <h5>Years</h5>
                  <h3>of Experience</h3>
                </div>
                <div
                  className="about-right-thumb"
                  style={{
                    backgroundImage: `url(${aboutBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero2;
