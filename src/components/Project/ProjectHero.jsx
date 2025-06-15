import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    title: "Construction of Modern Bus Park",
    description: "State-of-the-art transportation hub with modern amenities",
    link: "/project/project1",
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    title: "Rasalina De Wily Resort",
    description: "Luxury resort with stunning architectural design",
    link: "/project/project2",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    title: "City Center Plaza",
    description: "Mixed-use development in the heart of the city",
    link: "/project/project3",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "Downtown Office Tower",
    description: "Modern commercial space with sustainable features",
    link: "/project/project4",
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
      <style>{`
        .project-section {
          background: linear-gradient(to bottom, #f8f9fa, #ffffff);
        }
        
        .project-card {
          height: 320px;
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.2) !important;
        }
        
        .project-img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        
        .project-card:hover .project-img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 0.9;
        }
        
        .project-content {
          transform: translateY(16px);
          transition: transform 0.3s ease;
        }
        
        .project-card:hover .project-content {
          transform: translateY(0);
        }
        
        .project-description {
          opacity: 0;
          transition: all 0.3s ease 0.1s;
        }
        
        .project-card:hover .project-description {
          opacity: 1;
        }
        
        .project-btn {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.3s ease 0.1s;
        }
        
        .project-card:hover .project-btn {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-btn:hover {
          transform: scale(1.05) !important;
        }
        
        .nav-arrow {
          transition: all 0.3s ease;
          z-index: 20;
        }
        
        .nav-arrow:hover {
          transform: scale(1.1);
          background-color: #e3f2fd !important;
        }
        
        .dot-indicator {
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        
        .dot-indicator.active {
          width: 32px;
        }
        
        .stat-circle {
          width: 80px;
          height: 80px;
          transition: background-color 0.3s ease;
        }
        
        .stat-item:hover .stat-circle {
          background-color: #e3f2fd !important;
        }
        
        .border-title {
          position: relative;
        }
        
        .border-title::before {
          content: 'Project';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 4rem;
          font-weight: bold;
          color: #f1f3f4;
          z-index: -1;
          user-select: none;
        }
        
        .bg-decoration-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 256px;
          height: 256px;
          background-color: #e3f2fd;
          border-radius: 50%;
          transform: translate(128px, -128px);
          opacity: 0.5;
        }
        
        .bg-decoration-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 192px;
          height: 192px;
          background-color: #bbdefb;
          border-radius: 50%;
          transform: translate(-96px, 96px);
          opacity: 0.3;
        }
      `}</style>

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
                  Explore our portfolio of outstanding projects delivering excellence in construction, 
                  architecture, and renovation with innovative design solutions.
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
              style={{ marginLeft: '-20px', zIndex: 20 }}
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="nav-arrow btn btn-light shadow position-absolute end-0 top-50 translate-middle-y rounded-circle p-3 border-0"
              style={{ marginRight: '-20px', zIndex: 20 }}
            >
              <ChevronRight className="text-primary" size={24} />
            </button>

            {/* Projects Grid */}
            <div className="row g-4">
              {getVisibleProjects().map((project, index) => (
                <div key={`${currentSlide}-${index}`} className="col-lg-4 col-md-6">
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
                          
                          <button className="project-btn btn btn-primary fw-semibold px-4 py-2 rounded d-inline-flex align-items-center gap-2">
                            Know More
                            <ArrowRight size={16} />
                          </button>
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
                    index === currentSlide ? 'bg-primary active' : 'bg-secondary'
                  }`}
                  style={{ height: '12px' }}
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