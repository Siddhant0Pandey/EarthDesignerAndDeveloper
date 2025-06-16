import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-area footer-height pt-40 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-left-widget mb-40">
                <div className="footer-logo">
                   <img
      src="/img/logo/logo1.png"
      style={{ "--custom-width": "150px", width: "var(--custom-width)" }}
      className=" h-50"
      alt="logo_not_found"
    />
                </div>
                <p>
                  We are a dedicated team of civil engineers, designers, and
                  developers with over 20 years of experience delivering
                  high-quality construction projects.
                </p>
                <div className="footer-social mt-40">
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>

                  <Link to="#">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6">
              <div className="footer-widget footer-widget-space mb-40">
                <h3>contact us</h3>
                <ul className="footer-info">
                  <li>
                    <div className="footer-address mt-20">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <h5> Hattilet 06, Hetauda</h5>
                    </div>
                  </li>
                  <li>
                    <div className="footer-address mt-20">
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <h5 className="pt-1"> +977 985-1213859</h5>
                    </div>
                  </li>
                  <li>
                    <div className="footer-address mt-20">
                      <span className="">
                        <i className="fas fa-envelope-open-text"></i>
                      </span>
                      <h5 className="pt-1">info@earthdd.com.np</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-1 offset-xl-1 col-lg-6 col-md-6 pr-0 mb-40">
              <div className="footer-widget footer-link">
                <h3>Quick links</h3>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/project">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6 pr-0">
              <div className="footer-widget footer-gallery">
                <h3>Work Gallery</h3>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-01.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-01.jpg"
                    ></Link>
                  </div>
                </div>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-02.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-02.jpg"
                    ></Link>
                  </div>
                </div>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-03.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-03.jpg"
                    ></Link>
                  </div>
                </div>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-04.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-04.jpg"
                    ></Link>
                  </div>
                </div>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-05.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-05.jpg"
                    ></Link>
                  </div>
                </div>
                <div className="footer-gallery-item">
                  <div className="footer-gallery-thumb">
                    <img
                      src="src/assets/img/footer/footer-gallery/fg-06.jpg"
                      alt="image_not_found"
                    />
                  </div>
                  <div className="link-img">
                    <Link
                      className="popup-image"
                      to="src/assets/img/footer/footer-gallery/fg-big-06.jpg"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-20 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text text-center">
                <p>
                  Developed by{" "}
                  <a
                    href="https://www.codesala.com"
                    target="_blank"
                    className="text-warning"
                  >
                    CodeSala
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
