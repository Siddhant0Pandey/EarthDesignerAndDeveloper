import React, { useState } from "react";
// import { Link } from "react-router-dom";
import aboutBg from "../../assets/img/about/owner.jpg";

function AboutFounderMessage() {
  const [activeTab] = useState("nav-01");

  const tabContent = {
    "nav-01": {
      paragraphs: [
        `"As a civil engineer with over a decade of experience, I founded Earth Designers and Developers with a clear mission: to build the future of Nepal through quality construction. Our focus is not just on designing structures, but on creating strong, lasting foundations that support communities, businesses, and growth. Over the past 10 years, we have committed ourselves to delivering excellence in every project—from roads and bridges to hydropower and mining developments. At Earth Designers and Developers, we believe that true progress begins with strong infrastructure. With passion, expertise, and a relentless drive for quality, we continue to build the pathways that will carry Nepal into a brighter future."`,
        ` - Nabin Gautam, Founder & CEO`,
      ],
    },
  };

  return (
    <section className="about-area pb-90">
      <h1
        style={{
          textAlign: "center",
          color: "#005792",
          fontWeight: "bold",
        }}
      >
        Founder Message
      </h1>
      <div className="container">
        <div className="about-wrapper pt-6">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-left pos-rel"
                style={{ paddingTop: "20px" }}
              >
                <div className="border-title-2">{/* <h1>About</h1> */}</div>
                <div className="about-title mb-85">
                  <h5></h5>
                  {/* <h2>Transforming Nepal Through Infrastructure <br /> and Nation Building<span>.</span></h2> */}
                </div>
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index} style={{ fontStyle: "italic" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right pos-rel">
                <div
                  className="about-right-thumb"
                  style={{
                    backgroundImage: `url(${aboutBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "360px",
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

export default AboutFounderMessage;
