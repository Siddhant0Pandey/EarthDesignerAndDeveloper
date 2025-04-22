import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";

function HomeHero() {
      const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: true, 
      };
    
  return (
    <section className="slider-area">
    <Slider {...settings}>
      {/* First slide */}
      <div className="single-slider slider-height pos-rel d-flex align-items-center" style={{ backgroundImage: "url('img/bg/slider-bg-01.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="slider-content">
                <h5>General Contracting</h5>
                <h1>Build everything you need<span>.</span></h1>
                <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="slider-btn">
                  <Link className="thm-btn" to="#">Contact us</Link>
                  <Link className="thm-btn border-btn" to="#">Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second slide */}
      <div className="single-slider slider-height pos-rel d-flex align-items-center" style={{ backgroundImage: "url('img/bg/slider-bg-03.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="slider-content">
                <h5>General Contracting</h5>
                <h1>Build everything you need<span>.</span></h1>
                <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="slider-btn">
                  <Link className="thm-btn" to="#">Contact us</Link>
                  <Link className="thm-btn border-btn" to="#">Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Slider>
  </section>
  )
}

export default HomeHero