import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      {/* Header Top */}
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <ul className="left list-unstyled d-flex gap-4 mb-0">
                <li>
                  <i className="far fa-clock me-2"></i>9:30am - 6:30pm Mon - Sun
                </li>
                <li>
                  <i className="fas fa-phone-alt me-2"></i>+977 985-1213859
                </li>
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i>M8P8+QW2,
                  Lalitpur 44600
                </li>
              </ul>
              <ul className="right list-unstyled d-flex gap-3 mb-0">
                <li>
                  <Link to="#">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
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
          <div className="d-flex justify-content-between align-items-center py-2">
            {/* Logo */}
            <div className="logo">
  <Link to="/">
    <img
      src="/img/logo/logo1.png"
      style={{ "--custom-width": "150px", width: "var(--custom-width)" }}
      className=" h-50"
      alt="logo_not_found"
    />
  </Link>
</div>


            {/* Desktop Nav */}
            <div className="d-none d-lg-flex align-items-center gap-5">
              <nav className="main-menu">
                <ul className="d-flex gap-4 m-0 list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/project">Project</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <Link className="thm-btn" to="/contact">
                Get a quote
              </Link>
            </div>

            {/* Mobile Hamburger: always at far right */}
            <div className="d-lg-none">
              <button
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "25px",
                    height: "3px",
                    backgroundColor: "#000",
                  }}
                ></span>
                <span
                  style={{
                    width: "25px",
                    height: "3px",
                    backgroundColor: "#000",
                  }}
                ></span>
                <span
                  style={{
                    width: "25px",
                    height: "3px",
                    backgroundColor: "#000",
                  }}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header d-flex justify-content-between align-items-center px-3 pt-3">
          <Link to="/">
            <img
              src="/img/logo/logo1.png"
              alt="logo_not_found"
              style={{ height: "40px" }}
            />
          </Link>
          <button
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mobile-menu-content px-3">
          <nav>
            <ul className="list-unstyled">
              {["Home", "About", "Services", "Project", "Blog", "Contact"].map(
                (text, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${text.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="mt-3">
            <div>
              <i className="far fa-clock me-2"></i>9:30am - 6:30pm Mon - Sun
            </div>
            <div>
              <i className="fas fa-phone-alt me-2"></i>+977 985-1213859
            </div>
            <div>
              <i className="fas fa-map-marker-alt me-2"></i>M8P8+QW2, Lalitpur
              44600
            </div>
          </div>

          <div className="mt-3 d-flex gap-3">
            <Link to="#">
              <i className="fab fa-facebook-messenger"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>

          <div className="mt-4">
            <Link
              className="thm-btn"
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
