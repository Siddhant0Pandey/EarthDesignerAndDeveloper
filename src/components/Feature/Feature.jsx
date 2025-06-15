import React from "react";
import { Link } from "react-router-dom";

function Feature() {
  const backgroundImage = "url(/img/feature/feature-bg.jpg)";

  return (
    <section
      className="feature-area pt-120 pb-90"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="border-title">
            <h1>Featured</h1>
          </div>
          <h5>Core Services</h5>
          <h2>Explore What We Offer</h2>
        </div>
        <div className="row">
          {/* Feature 1 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-single mb-30">
              <div className="feature-thumb">
                <img
                  src="/img/feature/feature-01.jpg"
                  alt="Urban Infrastructure"
                />
              </div>
              <div className="feature-text">
                <h4>Committed to Urban Excellence</h4>
                <h2>
                  <Link to="#">Urban Infrastructure</Link>
                </h2>
                <p>
                  From smart road systems to public utilities, we build reliable
                  infrastructure that enhances everyday urban life.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-single mb-30">
              <div className="feature-thumb">
                <img
                  src="/img/feature/feature-02.jpg"
                  alt="Architectural Design"
                />
              </div>
              <div className="feature-text">
                <h4>Innovative and Sustainable</h4>
                <h2>
                  <Link to="#">Architectural Design</Link>
                </h2>
                <p>
                  Our designs blend aesthetics and functionality, delivering
                  efficient, eco-friendly, and modern spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-single mb-30">
              <div className="feature-thumb">
                <img
                  src="/img/feature/feature-03.jpg"
                  alt="Building Repair & Renovation"
                />
              </div>
              <div className="feature-text">
                <h4>Preserving and Upgrading</h4>
                <h2>
                  <Link to="#">Renovation & Restoration</Link>
                </h2>
                <p>
                  We repair and restore old structures with modern techniques,
                  enhancing their safety, value, and appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
