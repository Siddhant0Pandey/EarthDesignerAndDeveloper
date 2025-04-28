import React, { useState } from "react";
import aboutBg from "../../assets/img/bg/about-bg.jpeg";

function ServiceAbout() {
  const [activeTab] = useState("nav-01");

  const tabContent = {
    "nav-01": {
      paragraphs: [
        `At Earth Designers and Developers, we don’t just complete projects — we deliver long-term value. Our decade of experience in Nepal’s challenging construction landscape has made us a trusted name in infrastructure development.`,
        `We combine local insight with cutting-edge construction technologies to deliver projects that are durable, sustainable, and tailored to the communities they serve. Our team of seasoned engineers and professionals is driven by a commitment to quality, safety, and innovation.`,
        `What sets us apart is our deep understanding of Nepal’s geography and socio-economic needs. From remote mountainous villages to urban hubs, we have successfully implemented roadways, hydropower plants, bridges, and other critical infrastructure that connect people and empower regions.`,
        `We also believe in inclusive development — hiring local labor, training young professionals, and engaging with communities to ensure our projects leave a lasting impact. Our clients choose us because we listen, we care, and we deliver beyond expectations.`,
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
                    Why Choose Us?<span>.</span>
                  </h2>
                </div>
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right pos-rel">
                <div className="about-right-content">
                  <h1>
                    10<span></span>
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
                    height: "450px",
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

export default ServiceAbout;
