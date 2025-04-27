import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/project-section.css";

const projects = [
  {
    img: "src/assets/img/project/project-01.jpg",
    tag: "construction",
    title: "Baibhav Nepal Resort",
    description:
      "Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.",
  },
  {
    img: "src/assets/img/project/project-02.jpg",
    tag: "architecture",
    title: "Rasalina De Wily Resort",
    description:
      "Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.",
  },
  {
    img: "src/assets/img/project/project-03.jpg",
    tag: "renovation",
    title: "Rasalina De Wily Resort",
    description:
      "Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.",
  },
  {
    img: "src/assets/img/project/project-01.jpg",
    tag: "renovation",
    title: "Rasalina De Wily Resort",
    description:
      "Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.",
  },
];

const ProjectSection = () => {

  const NextArrow = ({ className, onClick }) => (
    <button className={`${className} custom-next-arrow`} onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );

  const PrevArrow = ({ className, onClick }) => (
    <button className={`${className} custom-prev-arrow`} onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );

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
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots"
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
                Explore our portfolio of outstanding projects delivering excellence in construction, architecture, and renovation.
              </p>
            </div>
          </div>
        </div>

        <div className="project-carousel-wrapper">
          <Slider {...settings} className="project-carousel">
            {projects.map((project, index) => (
              <div className="project-item-wrapper" key={index}>
                <div className="single-project">
                  <div className="project-thumb">
                    <img src={project.img} alt={project.title} className="img-fluid w-100" />
                    <div className="project-overlay">
                      <span className="project-category">{project.tag}</span>
                      <a href="#" className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project-text">
                    <div className="project-tag">
                      <h4><a href="#">{project.tag}</a></h4>
                    </div>
                    <div className="project-text-box">
                      <h3><a href="#">{project.title}</a></h3>
                      <p>{project.description}</p>
                      <a href="#" className="read-more-btn">
                        View Details <i className="fas fa-long-arrow-alt-right ms-2"></i>
                      </a>
                    </div>
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