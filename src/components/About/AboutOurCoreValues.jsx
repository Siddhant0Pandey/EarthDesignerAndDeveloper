import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShieldAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { HiHandRaised } from "react-icons/hi2";
import { FaLeaf } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";

const AboutOurCoreValues = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description: "Honesty, fairness, and transparency guide all our actions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge technology to deliver exceptional solutions.",
    },
    {
      icon: <FaTrophy />,
      title: "Excellence",
      description:
        "Striving for the highest standards in every project we undertake.",
    },
    {
      icon: <HiHandRaised />,
      title: "Community Empowerment",
      description:
        "Investing in local talent and uplifting communities through our work.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "Prioritizing environmentally responsible practices for a greener future.",
    },
    {
      icon: <FaRegHandshake />,
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
                  color: "#F57C00",
                  transition: "color 0.3s ease", // Smooth color transition
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
