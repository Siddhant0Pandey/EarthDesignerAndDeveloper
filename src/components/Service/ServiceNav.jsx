import React from "react";
import { Link } from "react-router-dom";
const ServiceNav = () => {
  const backgroundImage = "url(../src/assets/img/services/services02.jpg)";
  return (
    <section
      className="page-title-area pt-160 pb-160"
      data-overlay="8"
      style={{ backgroundImage, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title text-center">
              <div className="border-title">
                <h1>Services</h1>
              </div>
              <h1>Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNav;
