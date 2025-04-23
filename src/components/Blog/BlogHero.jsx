import React from "react";
import { Link } from "react-router-dom";
function BlogHero() {
  return (
    <>
      <section
        class="page-title-area pt-160 pb-160"
        data-overlay="8"
        data-background="img/bg/page-title-bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center">
                <div class="border-title">
                  <h1>Blog</h1>
                </div>
                <h1>Blog</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      {/* <a href="index.html">Home</a> */}
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog
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

export default BlogHero;
