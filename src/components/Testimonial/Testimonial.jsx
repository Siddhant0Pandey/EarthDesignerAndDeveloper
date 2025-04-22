import React from "react";
import Slider from "react-slick";

// Testimonial Component
function Testimonial() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rasalina De Willam",
      position: "Founder & Co",
      image: "img/testimonial/testi-01.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      name: "John Doe",
      position: "CEO, Company XYZ",
      image: "img/testimonial/testi-02.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Aenean nonummy hendrerit mauris. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis viverra diam non justo.",
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "Marketing Director",
      image: "img/testimonial/testi-03.jpg",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    }
  ];

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="testimonial-area">
      <div className="container-fluid">
        <div className="row no-gutters">
          {/* Left Section - Counters */}
          <div className="col-xl-6">
            <div
              className="counter-left counter-height pt-125 pb-125"
              style={{ backgroundImage: "url('img/bg/counter-bg.jpg')" }}
            >
              <div className="counter-content">
                <ul>
                  <li>
                    <div className="counter-box">
                      <h1>
                        <span>128</span>+
                      </h1>
                      <div className="counter-right-text">
                        <p>Awards</p>
                        <p>
                          <span>winning</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="counter-box">
                      <h1>
                        <span>508</span>+
                      </h1>
                      <div className="counter-right-text">
                        <p>Happy</p>
                        <p>
                          <span>Clients</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="counter-box">
                      <h1>
                        <span>29</span>+
                      </h1>
                      <div className="counter-right-text">
                        <p>Active</p>
                        <p>
                          <span>Projects</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="counter-box">
                      <h1>
                        <span>105</span>+
                      </h1>
                      <div className="counter-right-text">
                        <p>Engineers</p>
                        <p>
                          <span>Members</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Testimonials */}
          <div className="col-xl-6">
            <div
              className="testimonial-right testimonial-height"
              style={{ backgroundImage: "url('img/bg/testimonial-bg.jpg')" }}
            >
              <Slider {...settings} className="testimonial-active">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-single text-center">
                    <div className="testimonial-thumb">
                      <img src={testimonial.image} alt="testimonial" />
                    </div>
                    <div className="testimonial-text">
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.position}</span>
                      <p>{testimonial.text}</p>
                    </div>
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

export default Testimonial;
