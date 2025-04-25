import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeHero() {
  const sliderImages = [
    { 
      id: 1, 
      imgSrc: 'src/assets/img/bg/slider-bg-01.jpg', 
      title: 'Expert Construction Services', 
      subtitle: 'Building Spaces with Excellence.' 
    },
    { 
      id: 2, 
      imgSrc: 'src/assets/img/bg/slider-bg-03.jpg', 
      title: 'Design & Build with Precision', 
      subtitle: 'From Concept to Completion.' 
    },
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
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      } 
    ]
  };

  // Animation data attributes handler
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    const handleAnimation = () => {
      animatedElements.forEach(element => {
        const animationType = element.getAttribute('data-animation');
        const animationDelay = element.getAttribute('data-delay') || '0s';
        
        element.style.animationName = animationType;
        element.style.animationDelay = animationDelay;
        element.style.animationFillMode = 'both';
        element.style.animationDuration = '1s';
        element.style.visibility = 'visible';
      });
    };

    
    setTimeout(handleAnimation, 100);
    
   
    const slider = document.querySelector('.slider-active');
    if (slider) {
      slider.addEventListener('afterChange', handleAnimation);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('afterChange', handleAnimation);
      }
    };
  }, []);

  return (
    <main>
      <section className="slider-area">
        <div className="slider-active">
          <Slider {...sliderSettings}>
            {sliderImages.map((slide) => (
              <div
                key={slide.id}
                className="single-slider slider-height pos-rel d-flex align-items-center"
                style={{ 
                  backgroundImage: `url(${slide.imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="slider-content">
                        <h5 className="animated" data-animation="fadeInUp" data-delay=".2s">{slide.title}</h5>
                        <h1 className="animated" data-animation="fadeInUp" data-delay=".4s">
                          {slide.subtitle} <span>.</span>
                        </h1>
                        <p className="animated" data-animation="fadeInUp" data-delay=".6s">
                          We are a dedicated team of civil engineers, designers, and developers with over 20 years of experience delivering high-quality construction projects. Whether you're building your dream home, an office, or an entire community, we handle every detail to ensure lasting results.
                        </p>
                        <div className="slider-btn">
                          <Link 
                            className="thm-btn animated" 
                            data-animation="fadeInLeft" 
                            data-delay=".6s" 
                            to="/contact"
                          >
                            Get in Touch
                          </Link>
                          <Link 
                            className="thm-btn2 animated" 
                            data-animation="fadeInRight" 
                            data-delay=".6s" 
                            to="/quote"
                          >
                            Request a Free Quote Today
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