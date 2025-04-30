import React from "react";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    img: "img/project/p01.jpg",
    title: "Interior Design",
    description:
      "Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.",
  },
  {
    id: 2,
    img: "img/project/p02.jpg",
    title: "Construction",
    description:
      "Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.",
  },
  {
    id: 3,
    img: "img/project/p03.jpg",
    title: "Building Repair",
    description:
      "Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.",
  },
  // Add more project objects as needed...
];

const ProjectMain = () => {
  return (
    <div>
      <section className="feature-area process-area gray-bg pt-20 pb-20">
        <div className="container">
          <div className="row">
            {projectData.map((project) => (
              <div key={project.id} className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div
                  className="feature-single"
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                >
                  <div className="feature-thumb">
                    <img
                      src={project.img}
                      alt="project"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="feature-text p-3">
                    <h4 style={{ textTransform: "uppercase", color: "#888" }}>
                      Explore the Features
                    </h4>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </h2>
                    <p>{project.description}</p>
                    <Link
                      to={`project1`}
                      className="btn btn-sm btn-primary mt-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          {/* <div className="row">
            <div className="col-12 text-center mt-4">
              <div className="basic-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &laquo;
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &raquo;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ProjectMain;
