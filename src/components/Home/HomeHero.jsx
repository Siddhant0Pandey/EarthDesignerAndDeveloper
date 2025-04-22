import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const sliderImages = [
  { id: 1, imgSrc: 'src/assets/img/bg/slider-bg-01.jpg', title: 'General Contracting', subtitle: 'Build everything you need.' },
  { id: 2, imgSrc: 'src/assets/img/bg/slider-bg-03.jpg', title: 'General Contracting', subtitle: 'Build everything you need.' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

function HomeHero() {
  return (
    <main>
      <section className="slider-area">
        <div className="slider-active">
          <Slider {...sliderSettings}>
            {sliderImages.map((slide) => (
              <div
                key={slide.id}
                className="single-slider slider-height pos-rel d-flex align-items-center"
                style={{ backgroundImage: `url(${slide.imgSrc})` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="slider-content">
                        <h5 data-animation="fadeInUp" data-delay=".2s">{slide.title}</h5>
                        <h1 data-animation="fadeInUp" data-delay=".4s">
                          {slide.subtitle} <span>.</span>
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".6s">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div className="slider-btn">
                          <Link data-animation="fadeInLeft" data-delay=".6s" className="thm-btn" to="#">
                            Contact us
                          </Link>
                          <Link data-animation="fadeInRight" data-delay=".6s" className="thm-btn border-btn" to="#">
                            Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}

export default HomeHero;
