import React from "react";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: "project1",
    img: "/img/building.jpg",
    title: "Construction of Modern Bus Park, Itahari-9, Sunsari",
    description:
      "The Construction of Modern Bus Park in Itahari-9, Sunsari is a comprehensive infrastructure development initiative undertaken by...",
  },
  {
    id: "project2",
    img: "/img/building.jpg",
    title: "Construction of Kachana-Building School, Itahari-04, Sunsari",
    description:
      "The Construction of Kachana-Building School in Itahari-04 is a government-funded educational infrastructure project executed by a joint...",
  },
  {
    id: "project3",
    img: "/img/building.jpg",
    title: "Construction of Administrative Building",
    description:
      "This project involves the full construction of the Administrative Building in Itahari-06, ensuring adherence to contractual obligations and quality standards.",
  },
  {
    id: "project4",
    img: "/img/building.jpg",
    title: "Construction of Rajdhani Hetauda Sahari Sadak",
    description:
      "This project involves the construction of Rajdhani Hetauda Sahari Sadak under the approved package. The work includes full execution and rectification of defects in accordance with contractual obligations.",
  },
  {
    id: "project5",
    img: "/img/building.jpg",
    title: "Baraudhoran Health Post, Old Age Home & Ward Office Construction",
    description:
      "This project involves the construction of the Baraudhoran Health Post, Old Age Home, and multiple ward office buildings in Bishnu Rural Municipality, ensuring proper...",
  },
  {
    id: "project6",
    img: "/img/building.jpg",
    title:
      "Construction of Additional Floor and Site Development Works of Research Centre",
    description:
      "This project involves the construction of an additional floor and site development works for the research center at Kamane...",
  },
  {
    id: "project7",
    img: "/img/building.jpg",
    title: "Dasdhunga Narayani Integrated Development Project ",
    description:
      "This project focuses on the execution and completion of the Dasdhunga Narayani Integrated Development Building, ensuring infrastructure...",
  },
  {
    id: "project8",
    img: "/img/building.jpg",
    title: "Construction of the Parliamentary Party Office ",
    description:
      "This project involves the construction of the Parliamentary Party Office in Hetauda, ensuring high-quality execution...",
  },
  {
    id: "project9",
    img: "/img/building.jpg",
    title:
      "Construction of Floor Extension of Two Buildings and Other Civil Works ",
    description:
      "This project involves the construction of floor extensions for two buildings and associated civil works at the Armed Police Force Headquarters in Halchowk...",
  },
  {
    id: "project10",
    img: "/img/building.jpg",
    title:
      "Regional Office Building, Morang, including Sanitary, Electrical & Site Development Works",
    description:
      "The project involves the construction of a regional office building in Morang for the Armed Police Force of Nepal. It includes civil construction works, electrical installations, sanitary works, and site development...",
  },
];

const ProjectMain = () => {
  return (
    <div>
      <section className="feature-area process-area gray-bg pt-4 pb-4">
        <div className="container">
          <div className="row">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-4 d-flex"
              >
                <div
                  className="feature-single d-flex flex-column w-100"
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                >
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <img
                      src={project.img}
                      alt="project"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="feature-text p-3 d-flex flex-column flex-grow-1">
                    <h4 style={{ textTransform: "uppercase", color: "#888" }}>
                      Explore the Features
                    </h4>
                    <h2 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </h2>
                    <p className="flex-grow-1">{project.description}</p>
                    <Link
                      to={`/project/${project.id}`}
                      className="btn project-btn mt-2 align-self-start"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectMain;
