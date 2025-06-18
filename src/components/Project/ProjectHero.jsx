import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

const projects = [
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    title: "Construction of Modern Bus Park",
    description: "Advanced transit hub with modern infrastructure and services",
    link: "/project/project1",
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    title: "Construction of Kachana-Building School",
    description: "Well-equipped school facility promoting quality education",
    link: "/project/project2",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    title: "Construction of Administrative Building",
    description: "Modern office complex with efficient and functional design",
    link: "/project/project3",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "Construction of Rajdhani Hetauda Sahari Sadak",
    description: "Urban road project enhancing city connectivity and access",
    link: "/project/project4",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "Baraudhoran Health Post, Old Age Home & Ward Office Construction",
    description: "Essential facilities built for health and community service",
    link: "/project/project5",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title:
      "Construction of Additional Floor and Site Development Works of Research Centre",
    description: "Facility expansion to support scientific research and growth",
    link: "/project/project6",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "Dasdhunga Narayani Integrated Development Project",
    description: "Integrated civic project for regional growth and welfare",
    link: "/project/project7",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "Construction of the Parliamentary Party Office",
    description: "Dedicated office space for administrative political use",
    link: "/project/project8",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title:
      "Construction of Floor Extension of Two Buildings and Other Civil Works",
    description: "Expansion and upgrades to existing government buildings",
    link: "/project/project9",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
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
    <>
      {/* keep your existing styles here... */}

      <section className="project-section position-relative py-5">
        <div className="container">
          {/* Header Section */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <div className="border-title d-inline-block position-relative mb-4">
                  <h5 className="text-primary fw-semibold text-uppercase ls-1 bg-white px-3 mb-0 position-relative">
                    Our Projects
                  </h5>
                </div>
                <h2 className="display-4 fw-bold text-dark mb-4 lh-sm">
                  Projects That We Complete
                  <span className="text-primary">.</span>
                </h2>
                <p className="text-muted fs-5 lh-lg">
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
                  <div className="project-card card border-0 shadow rounded-3 overflow-hidden">
                    <div className="position-relative h-100">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="project-img card-img w-100"
                      />

                      {/* Gradient Overlay */}
                      <div className="project-overlay position-absolute top-0 start-0 w-100 h-100"></div>

                      {/* Content Overlay */}
                      <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                        <div className="project-content">
                          <h3 className="h4 fw-bold mb-2 text-white">
                            {project.title}
                          </h3>

                          <p className="project-description text-light mb-3 small">
                            {project.description}
                          </p>

                          {/* ✅ Use Link instead of button */}
                          <Link
                            to={project.link}
                            className="project-btn btn btn-primary fw-semibold px-4 py-2 rounded d-inline-flex align-items-center gap-2 text-decoration-none"
                          >
                            Know More
                            <ArrowRight size={16} />
                          </Link>
                        </div>
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
                    index === currentSlide
                      ? "bg-primary active"
                      : "bg-secondary"
                  }`}
                  style={{ height: "12px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="bg-decoration-1"></div>
        <div className="bg-decoration-2"></div>
      </section>
    </>
  );
};

export default ProjectSection;
