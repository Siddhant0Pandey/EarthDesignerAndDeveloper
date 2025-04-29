import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap
import { IoMdEye } from "react-icons/io";
import { FiTarget } from "react-icons/fi";

const MissionAndGoals = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#005792",
          fontWeight: "bold",
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        Mission and Vision
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-md-5 mb-4">
            <div
              className="mission-card"
              style={{
                overflow: "hidden",
                height: "18rem",
                backgroundColor: "#F57C00",
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <div className="card-body position-relative">
                <div
                  className="mission-icon"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "18rem",
                    color: "white",
                  }}
                >
                  <FiTarget size={190} />
                  <h4 style={{ fontWeight: "bold", color: "white" }}>
                    Our Mission
                  </h4>
                </div>

                <div className="overlay-content position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center text-white p-2">
                  <div className="content-text">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      Our Mission
                    </h5>
                    <p className="card-text" style={{ color: "white" }}>
                      Our mission is to create lasting, high-quality structures
                      that uplift communities and enhance lives. We focus on
                      safety, sustainability, and innovation, using advanced
                      technology and top materials to deliver resilient,
                      future-ready projects that exceed expectations and support
                      local economies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-md-5 mb-4">
            <div
              className="mission-card"
              style={{
                overflow: "hidden",
                height: "18rem",
                backgroundColor: "#F57C00",
                color: "white",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <div className="card-body position-relative">
                <div
                  className="mission-icon"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "18rem",
                    color: "white",
                  }}
                >
                  <IoMdEye size={200} />
                  <h4 style={{ fontWeight: "bold", color: "white" }}>
                    Our Vision
                  </h4>
                </div>

                <div className="overlay-content position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center text-white p-2">
                  <div className="content">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      Our Vision
                    </h5>
                    <p className="card-text" style={{ color: "white" }}>
                      Our vision is to set new benchmarks in the global
                      construction industry through excellence, integrity, and
                      sustainable innovation. We aspire to transform skylines,
                      build resilient communities, and create enduring spaces
                      that foster growth and leave a lasting, positive impact
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionAndGoals;
