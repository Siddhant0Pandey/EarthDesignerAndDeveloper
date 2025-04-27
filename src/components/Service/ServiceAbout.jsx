import React from "react";

const ServiceAbout = () => {
  return (
    <div>
      <section className="about-area about-2 pt-120 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="contact-left">
                <div className="contact-thumb-left">
                  <img src="img/about/about-bg-01.jpg" alt="image_not_found" />
                  <div className="contact-shape"></div>
                </div>
                <div className="contact-thumb-right">
                  <img src="img/about/about-bg-02.jpg" alt="image_not_found" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 pl-0">
              <div className="about-left pos-rel">
                <div className="border-title-2">
                  <h1>About</h1>
                </div>
                <div className="about-title">
                  <h5>About us !</h5>
                  <div className="about-right-content">
                    <h1>
                      10<span>+</span>
                    </h1>
                    <h5>Years</h5>
                    <h3>of Experience</h3>
                  </div>
                </div>
                <p>
                  Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  doklyeiusm tempor incididunt ut labore etry of the siely.
                </p>
                <p>
                  Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et Rorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et Royality of the best sede..
                </p>
                <ul className="about-info mt-30 mb-30">
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                    </div>
                  </li>
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>Noterjon PlLabore ar Rerom ipsum</h5>
                    </div>
                  </li>
                  <li>
                    <div className="about-info-title">
                      <span>
                        <i className="fas fa-check"></i>
                      </span>
                      <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                    </div>
                  </li>
                </ul>
                <div className="about-btn pt-20">
                  <a href="service-details.html" className="thm-btn">
                    Learn More
                  </a>
                  <a href="about.html" className="about-l-btn">
                    Learn More <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAbout;
