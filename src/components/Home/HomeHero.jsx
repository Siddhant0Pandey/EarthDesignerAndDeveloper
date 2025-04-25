import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../assets/img/bg/slider-bg-03.jpg';
import slide2 from '../../assets/img/bg/slider-bg-02.jpg';

function HomeHero() {
  const sliderImages = [
    {
      id: 1,
      imgSrc: slide1,
      title: 'Expert Construction Services',
      subtitle: 'Building Spaces with Excellence.'
    },
    {
      id: 2,
      imgSrc: slide2,
      title: 'Design & Build with Precision',
      subtitle: 'From Concept to Completion.'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false
  };

  return (
    <section className="slider-area">
      <Slider {...sliderSettings} className="slider-active">
        {sliderImages.map(slide => (
          <div key={slide.id}>
            <div
              className="single-slider slider-height d-flex align-items-center position-relative"
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark Overlay */}
              <div className="slider-overlay"></div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8">
                    <div className="slider-content">
                      <h5>{slide.title}</h5>
                      <h1>
                        {slide.subtitle} <span>.</span>
                      </h1>
                      <p>
                        We are a dedicated team of civil engineers, designers, and developers with over 20 years of experience delivering high-quality construction projects. Whether you're building your dream home, an office, or an entire community, we handle every detail to ensure lasting results.
                      </p>
                      <div className="slider-btn">
                        <Link to="/contact" className="thm-btn">
                          Get in Touch
                        </Link>
                        <Link to="/quote" className="thm-btn2">
                          Request a Free Quote Today
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HomeHero;
