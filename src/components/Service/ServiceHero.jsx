import React from "react";
import { Link } from "react-router-dom";

function ServiceHero() {
  return (
    <section className="services-area gray-bg pt-120 pb-90">
      <div className="container">
        <div className="section-title text-center">
          <div className="border-title">
            <h1>Services</h1>
          </div>
          <h5>Our Services</h5>
          <h2>we are expert in</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s01.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>Architeture</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box active text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s02.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>construction</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s03.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>Equipment</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s04.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>Renovation</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s05.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>Sanitary</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-box text-center mb-30">
              <div className="services-box-thumb mb-25">
                <img src="img/icon/s06.png" alt="image_not_found" />
              </div>
              <div className="services-box-text">
                <h2>Isalation</h2>
                <p>
                  Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing
                  elit, sed do.
                </p>
                <Link className="sevices-btn" to="#">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
