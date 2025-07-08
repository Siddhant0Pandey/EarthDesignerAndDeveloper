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
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style jsx>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }

        .mobile-menu-panel.active {
          right: 0;
        }

        .mobile-menu-header {
          // background: linear-gradient(135deg, #2c3e50 0%, #005792 100%);
          color: white;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-close {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mobile-menu-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .mobile-menu-content {
          padding: 2rem 1.5rem;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-links li {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-links a {
          display: block;
          padding: 1rem 1.5rem;
          color: #2c3e50;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-links a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #005792, #2980b9);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .mobile-nav-links a:hover {
          color: white;
          transform: translateX(5px);
        }

        .mobile-nav-links a:hover::before {
          left: 0;
        }

        .mobile-contact-info {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 1.5rem;
          margin: 2rem 0;
          border: 1px solid #e9ecef;
        }

        .mobile-contact-info h6 {
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.8rem;
          color: #495057;
          font-size: 14px;
        }

        .mobile-contact-item i {
          width: 20px;
          margin-right: 0.8rem;
          color: #005792;
        }

        .mobile-social-links {
          display: flex;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .mobile-social-links a {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #005792, #2980b9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .mobile-social-links a:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }

        .mobile-cta-button {
          background: #F57C00;
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          display: block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 14px;
        }

        .mobile-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
          color: white;
        }

       /* Hamburger Button Styles */
.hamburger-btn {
	background: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: 24px;
	justify-content: space-between;
	padding: 0;
	position: relative;
	width: 30px;
  }
  
  .hamburger-btn span {
	background-color: #333;
	border-radius: 2px;
	display: block;
	height: 3px;
	transition: all 0.3s ease;
	width: 100%;
  }

        @media (max-width: 576px) {
          .mobile-menu-panel {
            width: 100vw;
            right: -100vw;
          }
        }
      `}</style>

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
                    <i className="fas fa-map-marker-alt me-2"></i>Hattilet 06,
                    Hetauda
                  </li>
                </ul>
                <ul className="right list-unstyled d-flex gap-3 mb-0">
                  <li>
                    <Link to="tel:985-1213859">
                      <i className="fab fa-whatsapp"></i>
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

              {/* Mobile Hamburger */}
              <div className="d-lg-none">
                <button
                  className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
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
          <div className="mobile-menu-header">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/img/logo/logo1.png"
                alt="logo_not_found"
                style={{ height: "35px" }}
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

          <div className="mobile-menu-content">
            <nav>
              <ul className="mobile-nav-links">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Project", path: "/project" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-contact-info">
              <h6>Contact Information</h6>
              <div className="mobile-contact-item">
                <i className="far fa-clock"></i>
                <span>9:30am - 6:30pm Mon - Sun</span>
              </div>
              <div className="mobile-contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>+977 985-1213859</span>
              </div>
              <div className="mobile-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Hattilet 06, Hetauda</span>
              </div>
            </div>

            <div className="mobile-social-links">
              <Link to="tel:985-1213859">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>

            <Link
              className="mobile-cta-button"
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;