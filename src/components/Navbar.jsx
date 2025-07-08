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
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          z-index: 1000;
          transition: right 0.4s ease;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .mobile-menu-panel.active {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-close {
          background: rgba(0, 0, 0, 0.05);
          border: none;
          color: #333;
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
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .mobile-menu-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          overflow-y: auto;
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
          padding: 1rem;
          color: #2c3e50;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: #fff;
        }

        .mobile-nav-links a:hover {
          background: #005792;
          color: white;
        }

        .mobile-contact-info {
          margin-top: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1rem;
          border: 1px solid #e9ecef;
        }

        .mobile-contact-info h6 {
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 14px;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 14px;
          color: #495057;
        }

        .mobile-contact-item i {
          width: 20px;
          margin-right: 0.8rem;
          color: #005792;
        }

        .mobile-social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .mobile-social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #005792;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
        }

        .mobile-cta-button {
          margin-top: 1rem;
          background: #f57c00;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          font-weight: 600;
          text-align: center;
          display: block;
          text-decoration: none;
          font-size: 14px;
        }

        .hamburger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 24px;
          width: 30px;
        }

        .hamburger-btn span {
          background: #333;
          height: 3px;
          width: 100%;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-btn.active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-btn.active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      `}</style>

      <header>
        <div className="d-lg-none px-3 py-2 d-flex justify-content-between align-items-center">
          <Link to="/">
            <img
              src="/img/logo/logo1.png"
              alt="logo"
              style={{ height: "35px" }}
            />
          </Link>
          <button
            className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        <div className={`mobile-menu-panel ${mobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/img/logo/logo1.png"
                alt="logo"
                style={{ height: "30px" }}
              />
            </Link>
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mobile-menu-content">
            <div>
              <ul className="mobile-nav-links">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Project",
                  "Blog",
                  "Contact",
                ].map((name, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mobile-contact-info">
                <h6>Contact Info</h6>
                <div className="mobile-contact-item">
                  <i className="far fa-clock"></i> 9:30am - 6:30pm Mon - Sun
                </div>
                <div className="mobile-contact-item">
                  <i className="fas fa-phone-alt"></i> +977 985-1213859
                </div>
                <div className="mobile-contact-item">
                  <i className="fas fa-map-marker-alt"></i> Hattilet 06, Hetauda
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
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
