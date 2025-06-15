import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../public/blog/blog-hero.jpg";

function BlogHero() {
  const backgroundImage = `url(${bgImage})`;

  return (
    <section
      className="page-title-area pt-160 pb-160"
      data-overlay="8"
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title text-center">
              <div className="border-title">
                <h1>Blog</h1>
              </div>
              <h1>Blog</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
