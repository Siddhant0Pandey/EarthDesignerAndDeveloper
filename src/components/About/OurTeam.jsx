import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const backgroundImage = "url(img/feature/feature-bg.jpg)";

const OurTeam = () => {
  return (
    <section
      className="py-5 bg-light"
      data-background="img/feature/feature-bg.jpg"
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Our Team
        </h2>

        <p className="text-center mb-5" style={{ color: "white" }}>
          Meet the experts who drive our success and bring your visions to life.
        </p>

        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="img/feature/feature-01.jpg" alt="image_not_found" />
              <div className="card-body text-center">
                <h5
                  className="card-title1 text-primary"
                  style={{ fontWeight: "bold" }}
                >
                  John Doe
                </h5>
                <p className="text-muted mb-2">Chief Architect</p>
                <p className="card-text1">
                  John leads our design team with over 15 years of experience in
                  crafting inspiring spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="img/feature/feature-01.jpg" alt="image_not_found" />
              <div className="card-body text-center">
                <h5
                  className="card-title1 text-primary"
                  style={{ fontWeight: "bold" }}
                >
                  Sarah Smith
                </h5>
                <p className="text-muted mb-2">Construction Manager</p>
                <p className="card-text1">
                  Sarah ensures every project is delivered on time with
                  precision and top-quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="img/feature/feature-01.jpg" alt="image_not_found" />
              <div className="card-body text-center">
                <h5
                  className="card-title1 text-primary"
                  style={{ fontWeight: "bold" }}
                >
                  David Lee
                </h5>
                <p className="text-muted mb-2">Building Repair Specialist</p>
                <p className="card-text1">
                  David specializes in restoring buildings with care,
                  efficiency, and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
