import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      {/* Header Top */}
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <ul className="left">
                <li>
                  <span>
                    <i className="far fa-clock"></i>
                  </span>{" "}
                  9:30am - 6:30pm Mon - Sun
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>{" "}
                  +800-123-4567 6587
                </li>
                <li>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>{" "}
                  Anmoore Road Brooklyn, NY 230
                </li>
              </ul>
              <ul className="right">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-messenger"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-whatsapp"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2">
              <div className="logo logo-2">
                <Link to="/">
                  <img
                    src="./src/assets/img/logo/logo.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 d-flex justify-content-end align-items-center">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                      {/* Uncomment if submenu needed
                      <ul className="submenu">
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/services-details">Service Details</Link></li>
                      </ul>
                      */}
                    </li>
                    <li>
                      <Link to="/project">Project</Link>
                      {/* Uncomment if submenu needed
                      <ul className="submenu">
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/project-details">Project Details</Link></li>
                      </ul>
                      */}
                    </li>
                    <li>
                      <Link to="/blog">Blog +</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-menu d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
