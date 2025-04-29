import React, { useState } from "react";
import aboutBg from "../../assets/img/bg/about-bg.jpeg";

function AboutHero2() {
  const [activeTab] = useState("nav-01");

  const tabContent = {
    "nav-01": {
      paragraphs: [
        `After the devastating 2015 earthquake, young civil engineer Nabin Gautam saw an opportunity not just to rebuild, but to transform Nepal’s future. He founded Earth Designers and Developers with a mission to strengthen the nation through essential infrastructure—roads, bridges, highways, hydropower, and mining projects. Nabin believed that true development would only come by creating a strong foundation that connected communities, boosted the economy, and supported growth across all sectors like education, healthcare, and commerce.`,
        `Despite facing harsh terrain, resource limitations, and bureaucratic hurdles, Nabin pushed forward by adopting innovative construction technologies and empowering local talent. His company quickly grew into a symbol of progress, helping to bridge Nepal’s rural and urban divide. Today, Earth Designers and Developers stands as a leader in hard infrastructure development, and Nabin’s vision continues to inspire the next generation to see infrastructure as the backbone of a prosperous Nepal.`,
      ],
    },
    "nav-02": {
      paragraphs: [
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.`,
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..`,
      ],
    },
    "nav-03": {
      paragraphs: [
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.`,
        `Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..`,
      ],
    },
  };

  return (
    <section className="about-area pb-90">
      <div className="container">
        <div className="about-wrapper pt-120">
          <div className="row">
            {/* Left Column (Text) */}
            <div className="col-lg-6 order-2 order-md-1">
              <div className="about-left pos-rel">
                <div className="border-title-2">
                  <h1>About</h1>
                </div>
                <div className="about-title mb-20">
                  <h5>About us !</h5>
                  <h2>
                    Transforming Nepal Through Infrastructure <br /> and Nation
                    Building<span>.</span>
                  </h2>
                </div>
                {tabContent[activeTab].paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="col-lg-6 order-1 order-md-2">
              <div className="about-right pos-rel">
                <div className="about-right-content">
                  <h1>
                    10<span></span>
                  </h1>
                  <h5>Years</h5>
                  <h3>of Experience</h3>
                </div>
                <div
                  className="about-right-thumb"
                  style={{
                    backgroundImage: `url(${aboutBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "450px",
                    borderRadius: "10px",
                    marginBottom: "30px", // Gap between image and text
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero2;
