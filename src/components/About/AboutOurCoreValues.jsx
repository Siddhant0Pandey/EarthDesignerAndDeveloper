import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutOurCoreValues = () => {
  const values = [
    {
      icon: "",
      title: "Integrity",
      description: "Honesty, fairness, and transparency guide all our actions.",
    },
    {
      icon: "",
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge technology to deliver exceptional solutions.",
    },
    {
      icon: "",
      title: "Excellence",
      description:
        "Striving for the highest standards in every project we undertake.",
    },
    {
      icon: "",
      title: "Resilience",
      description:
        "Building infrastructure that stands the test of time and nature.",
    },
    {
      icon: "",
      title: "Community Empowerment",
      description:
        "Investing in local talent and uplifting communities through our work.",
    },
    {
      icon: "",
      title: "Sustainability",
      description:
        "Prioritizing environmentally responsible practices for a greener future.",
    },
    {
      icon: "",
      title: "Collaboration",
      description:
        "We believe success is built through strong partnerships and teamwork.",
    },
  ];

  return (
    <div className="container py-5">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: "bold", paddingTop: "100px" }}
      >
        Our Core Values
      </h2>
      <div className="row">
        {values.map((value, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="core-value-item">
              <span
                className="core-value-icon"
                style={{
                  fontSize: "2em",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                {value.icon}
              </span>
              <h3 className="core-value-title">{value.title}</h3>
              <p className="core-value-description">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOurCoreValues;
