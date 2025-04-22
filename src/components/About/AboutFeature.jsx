import React from "react";

function AboutFeature() {
  const backgroundImage = "url(src/assets/img/bg/feature-bg.jpg)";
  return (
    <>
      <section
        className="feature-area pt-120 pb-90"
        data-background="src/assets/img/bg/feature-bg.jpg"
        style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
      >
        <div class="container">
          <div class="section-title text-center">
            <div class="border-title">
              <h1>featured</h1>
            </div>
            <h5>featured</h5>
            <h2>explore the features</h2>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="feature-single mb-30">
                <div class="feature-thumb">
                  <img src="img/feature/feature-01.jpg" alt="image_not_found" />
                </div>
                <div class="feature-text">
                  <h4>explore the features</h4>
                  <h2>
                    <a href="#">Interior Design</a>
                  </h2>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adip isicing elit,
                    sed do eiusmod tempor incutey.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="feature-single mb-30">
                <div class="feature-thumb">
                  <img src="img/feature/feature-02.jpg" alt="image_not_found" />
                </div>
                <div class="feature-text">
                  <h4>explore the features</h4>
                  <h2>
                    <a href="#">construction</a>
                  </h2>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adip isicing elit,
                    sed do eiusmod tempor incutey.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="feature-single mb-30">
                <div class="feature-thumb">
                  <img src="img/feature/feature-03.jpg" alt="image_not_found" />
                </div>
                <div class="feature-text">
                  <h4>explore the features</h4>
                  <h2>
                    <a href="#">building repair</a>
                  </h2>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adip isicing elit,
                    sed do eiusmod tempor incutey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutFeature;
