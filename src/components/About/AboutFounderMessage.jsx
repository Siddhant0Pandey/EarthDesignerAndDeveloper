import React, { useState } from "react";
import aboutBg from "/img/founder.jpg";

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
      {/* <h1
        style={{
          textAlign: "center",
          color: "#005792",
          fontWeight: "bold",
          paddingBottom: "70px",
        }}
      >
        Founder Message
      </h1> */}
      <h1
        className="text-center fw-bold pb-lg-5 pb-3"
        style={{ color: "#005792" }}
      >
        Founder Message
      </h1>
      <div className="container">
        <div className="about-wrapper pt-6">
          <div className="row align-items-stretch">
            {/* Image column */}
            {/* Image column */}
            <div className="col-lg-6 order-1 order-lg-2 mb-4">
              <div
                className="about-right-thumb mb-100"
                style={{
                  backgroundImage: `url(${aboutBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  aspectRatio: "4 / 3", // Ensures proportional scaling
                  borderRadius: "10px",
                  height: "390px",
                }}
              ></div>
            </div>

            {/* Text column */}
            <div className="col-lg-6 order-2 order-lg-1 d-flex">
              <div
                className="about-left pos-rel"
                style={{
                  padding: "30px",
                  fontStyle: "italic",
                  height: "360px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "10px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // center vertically
                }}
              >
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index} style={{ marginBottom: "1rem" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFounderMessage;
