import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    img: "/img/construction1.jpg",
    title: "Construction of Modern Bus Park",
    description: "Advanced transit hub with modern infrastructure and services",
    link: "/project/project1",
  },
  {
    img: "/img/building.jpg",
    title: "Construction of Kachana-Building School",
    description: "Well-equipped school facility promoting quality education",
    link: "/project/project2",
  },
  {
    img: "/img/project3.jpg",
    title: "Construction of Administrative Building",
    description: "Modern office complex with efficient and functional design",
    link: "/project/project3",
  },
  {
    img: "/img/construction2.jpg",
    title: "Construction of Rajdhani Hetauda Sahari Sadak",
    description: "Urban road project enhancing city connectivity and access",
    link: "/project/project4",
  },
  {
    img: "/img/construction3.jpg",
    title: "Baraudhoran Health Post, Old Age Home & Ward Office Construction",
    description: "Essential facilities built for health and community service",
    link: "/project/project5",
  },
  {
    img: "/img/construction4.jpg",
    title:
      "Construction of Additional Floor and Site Development Works of Research Centre",
    description: "Facility expansion to support scientific research and growth",
    link: "/project/project6",
  },
  {
    img: "/img/construction5.jpg",
    title: "Dasdhunga Narayani Integrated Development Project",
    description: "Integrated civic project for regional growth and welfare",
    link: "/project/project7",
  },
  {
    img: "/img/construction6.jpg",
    title: "Construction of the Parliamentary Party Office",
    description: "Dedicated office space for administrative political use",
    link: "/project/project8",
  },
  {
    img: "/img/construction7.jpg",
    title:
      "Construction of Floor Extension of Two Buildings and Other Civil Works",
    description: "Expansion and upgrades to existing government buildings",
    link: "/project/project9",
  },
  {
    img: "/img/construction8.jpg",
    title:
      "Regional Office Building, Morang, including Sanitary, Electrical & Site Development Works",
    description: "New regional office with full facility and site setup",
    link: "/project/project10",
  },
];

const ProjectSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentSlide + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section className="project-section position-relative py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <div className="border-title d-inline-block position-relative mb-4">
                <h5 className="text-[#1696e7] fw-semibold text-uppercase ls-1 bg-white px-3 mb-0 position-relative">
                  Our Projects
                </h5>
              </div>
              <h2 className="display-4 fw-bold text-[#1696e7] mb-4 lh-sm">
                Projects That We Complete
                <span className="text-[#1696e7]">.</span>
              </h2>
              <p className="fs-5 lh-lg text-[#1696e7]">
                Explore our portfolio of outstanding projects delivering
                excellence in construction, architecture, and renovation with
                innovative design solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="position-relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="nav-arrow btn btn-light shadow position-absolute start-0 top-50 translate-middle-y rounded-circle p-3 border-0"
            style={{ marginLeft: "-20px", zIndex: 20 }}
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="nav-arrow btn btn-light shadow position-absolute end-0 top-50 translate-middle-y rounded-circle p-3 border-0"
            style={{ marginRight: "-20px", zIndex: 20 }}
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Projects Grid */}
          <div className="row g-4">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="col-lg-4 col-md-6"
              >
                <div 
                  className="project-card card border-0 shadow rounded-3 overflow-hidden" 
                  style={{ 
                    height: "450px", 
                    width: "100%",
                    position: "relative"
                  }}
                >
                  {/* Image Container */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    {/* Dark Overlay */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
                      }}
                    ></div>
                  </div>

                  {/* Content Section - Fixed Position */}
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                    style={{ 
                      zIndex: 2,
                      height: "180px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div className="project-content">
                      <h3 className="h5 fw-bold mb-2 text-white" style={{ 
                        fontSize: "1.1rem", 
                        lineHeight: "1.3",
                        height: "2.6rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                      }}>
                        {project.title}
                      </h3>
                      <p className="text-light mb-2 small opacity-90" style={{ 
                        fontSize: "0.875rem", 
                        lineHeight: "1.4",
                        height: "2.8rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                      }}>
                        {project.description}
                      </p>
                    </div>
                    
                    <div style={{ marginTop: "8px" }}>
                      <Link
                        to={project.link}
                        className="btn btn-primary fw-semibold px-3 py-2 rounded d-inline-flex align-items-center gap-2 text-decoration-none"
                        style={{ 
                          backgroundColor: "#1696e7", 
                          borderColor: "#1696e7",
                          fontSize: "0.85rem"
                        }}
                      >
                        Know More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="d-flex justify-content-center mt-5 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot-indicator btn p-0 border-0 rounded-pill ${
                  index === currentSlide ? "bg-primary" : "bg-secondary"
                }`}
                style={{
                  height: "12px",
                  width: "12px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorations (Optional) */}
      <div className="bg-decoration-1"></div>
      <div className="bg-decoration-2"></div>
    </section>
  );
};

export default ProjectSection;
