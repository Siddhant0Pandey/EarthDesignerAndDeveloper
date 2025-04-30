import React from "react";
import Slider from "react-slick";

// Testimonial Component
function Testimonial() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Subarna Shah",
      position: "Founder & Co",
      image: "img/testimonial/testi-01.jpg",
      text: "Working with Earth Designer and Developer was a great experience. The team was professional, timely, and detail-oriented. They managed the entire project smoothly, even during challenges. We’re beyond satisfied and highly recommend them for reliable construction work in Nepal.",
    },
    {
      id: 2,
      name: "Muskan Khadka",
      position: "CEO, Smily.co",
      image: "img/testimonial/testi-01.jpg",
      text: "Choosing Earth Designer and Developer for our construction project was the right decision. Their team maintained excellent communication throughout, stayed on schedule, and delivered high-quality work. Even when challenges came up, they handled everything with professionalism and care. It’s not easy to find this level of dedication and reliability in the construction industry here in Nepal.",
    },
    {
      id: 3,
      name: "Amit Thapa Magar",
      position: "Marketing Director",
      image: "img/testimonial/testi-01.jpg",
      text: "We are truly grateful to Earth Designer and Developer for turning our vision into reality. Their expertise, careful planning, and commitment to quality were evident at every stage of the project. The team was approachable, flexible, and always ready to find solutions. Thanks to their hard work, we now have a space we are proud of. Highly recommended for anyone looking for reliable construction services in Nepal",
    },
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
              style={{
                backgroundImage: "url('img/testimonial/testi-counter-bg.jpg')",
              }}
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
              style={{
                backgroundImage: "url('img/testimonial/contact-bg.jpg')",
              }}
            >
              <Slider {...settings} className="testimonial-active">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-single text-center"
                  >
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
