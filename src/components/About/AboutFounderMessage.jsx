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
            <div
              className="col-lg-6 order-1 order-lg-2 mb-4 "
              style={{ height: "320px" }}
            >
              <div
                className="about-right-thumb w-100"
                style={{
                  position: "relative",
                  // paddingBottom: "66.66%", // 4:3 aspect ratio (390 / 585 = 0.666)
                  backgroundImage: `url(${aboutBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  width: "100%",
                  maxWidth: "500px", // limits width on larger screens
                  height: "100%",
                  objectFit: "cover",
                }}
              ></div>
            </div>

            {/* Text column */}
            <div className="col-lg-6 order-2 order-lg-1 d-flex">
              <div className="about-left pos-rel p-6 italic h-[360px] bg-[#f9f9f9] rounded-[10px] w-full flex flex-col justify-center pt-[120px] lg:pt-0">
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index} className="mb-4">
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
