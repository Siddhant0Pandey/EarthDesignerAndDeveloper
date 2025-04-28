import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size increases to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                  +977 985-1213859
                </li>
                <li>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>{" "}
                  M8P8+QW2, Lalitpur 44600
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
      <div className="header-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="logo logo-2">
                <Link to="/">
                  <img
                    src="./src/assets/img/logo/logo4.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-6">
              {/* Desktop Menu - Only visible on lg screens and up */}
              <div className="d-none d-lg-flex justify-content-end align-items-center">
                <div className="main-menu me-4">
                  <nav>
                    <ul>
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
                </div>
                <div className="header-button">
                  <Link className="thm-btn" to="/contact">
                    Get a quote
                  </Link>
                </div>
              </div>
              
              {/* Mobile Menu Toggle Button - Only visible below lg screens */}
              <div className="d-lg-none text-end">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="hamburger-btn"
                  aria-label="Toggle mobile menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Only appears when menu is open */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sliding Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <Link to="/">
              <img
                src="./src/assets/img/logo/logo4.png"
                alt="logo_not_found"
                className="mobile-logo-img"
              />
            </Link>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="mobile-menu-content">
          <nav className="mobile-navigation">
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              </li>
              <li>
                <Link to="/project" onClick={() => setMobileMenuOpen(false)}>Project</Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
          
          <div className="mobile-contact-info">
            <div className="info-item">
              <i className="far fa-clock"></i>
              <span>9:30am - 6:30pm Mon - Sun</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <span>+977 985-1213859</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>M8P8+QW2, Lalitpur 44600</span>
            </div>
          </div>
          
          <div className="mobile-social-links">
            <Link to="#" className="social-icon">
              <i className="fab fa-facebook-messenger"></i>
            </Link>
            <Link to="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
          
          <div className="mobile-cta">
            <Link className="thm-btn mobile-quote-btn" to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;