import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/project-section.css";
import { Link } from "react-router-dom";

const projects = [
  {
    img: "/img/building.jpg",
    title: "Construction of Modern Bus Park",
    link: "/project/project1",
  },
  {
    img: "/img/building.jpg",
    title: " Construction of Kachana-Building School",
    link: "/project/project2",
  },
  {
    img: "/img/building.jpg",
    title: "Construction of Administrative Building",
    link: "/project/project3",
  },
  {
    img: "/img/building.jpg",
    title: "Construction of Rajdhani Hetauda Sahari Sadak",
    link: "/project/project4",
  },
  {
    img: "/img/building.jpg",
    title: "Baraudhoran Health Post, Old Age Home & Ward Office Construction",
    link: "/project/project5",
  },
  {
    img: "/img/building.jpg",
    title:
      "Construction of Additional Floor and Site Development Works of Research Centre",
    link: "/project/project6",
  },
  {
    img: "/img/building.jpg",
    title: "Dasdhunga Narayani Integrated Development Project",
    link: "/project/project7",
  },
  {
    img: "/img/building.jpg",
    title: "Construction of the Parliamentary Party Office",
    link: "/project/project8",
  },
  {
    img: "/img/building.jpg",
    title:
      "Construction of Floor Extension of Two Buildings and Other Civil Works",
    link: "/project/project9",
  },
  {
    img: "/img/building.jpg",
    title:
      "Regional Office Building, Morang, including Electrical & Site Development Works",
    link: "/project/project10",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  arrows: false, // Disable default arrows
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  dotsClass: "slick-dots custom-dots",
};

const ProjectSection = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="project-area pos-rel pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <div className="border-title">
                <h1>Project</h1>
              </div>
              <h5 className="subtitle">Our Projects</h5>
              <h2 className="title">
                Projects That We Complete<span className="dot">.</span>
              </h2>
              <p className="section-desc mt-3">
                Explore our portfolio of outstanding projects delivering
                excellence in construction, architecture, and renovation.
              </p>
            </div>
          </div>
        </div>

        {/* Project Carousel with Custom Navigation */}
        <div
          className="project-carousel-wrapper"
          style={{ position: "relative" }}
        >
          {/* Custom Navigation Arrows */}
          <div
            className="carousel-navigation"
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              zIndex: 10,
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <button
              className="custom-prev-arrow"
              onClick={handlePrevClick}
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "16px",
                pointerEvents: "auto",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#007bff";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0, 0, 0, 0.7)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              className="custom-next-arrow"
              onClick={handleNextClick}
              style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "16px",
                pointerEvents: "auto",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#007bff";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0, 0, 0, 0.7)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <Slider ref={sliderRef} {...settings} className="project-carousel">
            {projects.map((project, index) => (
              <div className="project-item-wrapper" key={index}>
                <div
                  className="single-project"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "300px",
                    borderRadius: "10px",
                    margin: "0 10px",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title || "Project Image"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "blur(3px)",
                      transform: "scale(1.1)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      color: "#fff",
                      textAlign: "center",
                      textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "24px",
                        marginBottom: "12px",
                        color: "#fff",
                        fontWeight: "900",
                        lineHeight: "1.2",
                      }}
                    >
                      {project.title}
                    </h3>
                    <Link
                      to={project.link}
                      style={{
                        display: "inline-block",
                        padding: "12px 24px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        borderRadius: "6px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0056b3";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#007bff";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      Know More <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
