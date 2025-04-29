import React from "react";
import Slider from "react-slick";

const brandLogos = [
  { id: 1, src: "/img/brand/brand-01.png" },
  { id: 2, src: "/img/brand/brand-02.png" },
  { id: 3, src: "/img/brand/brand-03.png" },
  { id: 4, src: "/img/brand/brand-04.png" },
  { id: 5, src: "/img/brand/brand-05.png" },
];

const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Brand() {
  return (
    <section className="brand-area gray-bg pt-90 pb-90">
      <div className="container-fluid">
        <div className="section-title text-center mb-100">
          <div className="border-title">
            {/* <h1>Associated Brands-Partner</h1> */}
          </div>
          <h5>Our Partners </h5>
          <h2>
            Associated Brands<span>.</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="brand-active">
              <Slider {...slickSettings}>
                {brandLogos.map((brand) => (
                  <div key={brand.id} className="single-brand">
                    <a className="partner-logo" href="#">
                      <img
                        className="before-image"
                        src={brand.src}
                        alt="Brand Logo"
                      />
                      <img
                        className="after-image"
                        src={brand.src}
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
