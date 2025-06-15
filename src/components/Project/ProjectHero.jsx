import React from "react";
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
    title: "Construction of the Parliamentary Party Officet",
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
      "Regional Office Building, Morang, including Sanitary, Electrical & Site Development Works",
    link: "/project/project10",
  },
];

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
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  dotsClass: "slick-dots custom-dots",
};

const ProjectSection = () => {
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

        <div className="project-carousel-wrapper">
          <Slider {...settings} className="project-carousel">
            {projects.map((project, index) => (
              <div className="project-item-wrapper" key={index}>
                <div
                  className="single-project"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "300px",
                    borderRadius: "10px",
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
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "24px",
                        marginBottom: "12px",

                        fontWeight: "900",
                      }}
                    >
                      {project.title}
                    </h3>
                    <Link
                      to={project.link}
                      href="#"
                      style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        borderRadius: "4px",
                        textDecoration: "none",
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
