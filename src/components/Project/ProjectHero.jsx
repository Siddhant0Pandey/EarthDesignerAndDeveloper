import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Rasalina De Wily Resort",
    category: "construction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    img: "img/project/project-01.jpg"
  },
  {
    id: 2,
    title: "Rasalina De Wily Resort",
    category: "architecture",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    img: "assets/src/img/project/project-02.jpg"
  },
  {
    id: 3,
    title: "Rasalina De Wily Resort",
    category: "renovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    img: "assets/src/img/project/project-03.jpg"
  },
  {
    id: 4,
    title: "Rasalina De Wily Resort",
    category: "renovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    img: "assets/src/img/project/project-02.jpg"
  }
];

// Slick settings for the carousel
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

function ProjectHero() {
  return (
    <section className="project-area pos-rel pt-120 pb-120">
      <div className="container-fluid">
        <div className="section-title text-center mb-100">
          <div className="border-title">
            <h1>Project</h1>
          </div>
          <h5>Our Project</h5>
          <h2>Projects that we complete<span>.</span></h2>
        </div>

        <div className="project-active">
          <Slider {...slickSettings}>
            {projects.map((project) => (
              <div key={project.id} className="single-project">
                <div className="project-thumb">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-text">
                  <div className="project-tag">
                    <h4><Link to="#">{project.category}</Link></h4>
                  </div>
                  <div className="project-text-box">
                    <h3><Link to="#">{project.title}</Link></h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
