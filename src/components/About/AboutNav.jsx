import React from "react";
import { Link } from "react-router-dom";

function AboutNav() {
  const backgroundImage = "url(img/page-title-bg.jpg)";
  return (
    <>
      <section
        className="page-title-area pt-160 pb-160"
        data-overlay="8"
        data-background=" public/img/page-title-bg.jpg"
        style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title text-center">
                <div className="border-title">
                  <h1>About</h1>
                </div>
                <h1>About us</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      {/* <a href="index.html">Home</a> */}
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutNav;
