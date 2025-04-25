import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    img: "src/assets/img/project/project-01.jpg",
    tag: "construction",
    title: "Baibhav Nepal Resort",
    description:
      "Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.",
  },
  {
    img: "src/assets/img/project/project-2.jpg",
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
  };

  return (
    <section className="project-area pos-rel pt-120 pb-120">
      <div className="container-fluid">
        <div className="section-title text-center mb-100">
          <div className="border-title">
            <h1>Project</h1>
          </div>
          <h5>Our Project</h5>
          <h2>
            project that we complete<span>.</span>
          </h2>
        </div>
        <Slider {...settings} className="project-active">
          {projects.map((project, index) => (
            <div className="single-project" key={index}>
              <div className="project-thumb">
                <img src={project.img} alt="image_not_found" />
              </div>
              <div className="project-text" style={{ width: 400 }}>
                <div className="project-tag">
                  <h4>
                    <a href="#">{project.tag}</a>
                  </h4>
                </div>
                <div className="project-text-box">
                  <h3>
                    <a href="#">{project.title}</a>
                  </h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
