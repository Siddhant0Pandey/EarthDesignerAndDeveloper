import React from 'react'

function ContactForm() {
  return (
    <section className="contact-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="contact-left">
                                <div className="contact-thumb-left">
                                    <img src="src/assets/img/bg/contact-bg.jpg" alt="image_not_found"/>
                                    <div className="contact-shape"></div>
                                </div>
                                <div className="contact-thumb-right">
                                    <img src="src/assets/img/bg/contact-bg-02.jpg" alt="image_not_found"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="contact-right">
                                <div className="border-title-2">
                                    <h1>F.Quote</h1>
                                </div>
                                <div className="about-title mb-20">
                                    <h5>Free Quote</h5>
                                    <h2>Get A Free consultation<span>.</span></h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="text-box">
                                                <span><i className="far fa-user"></i></span>
                                                <input type="text" placeholder="Enter full name"/> 
                                            </div>
                                            
                                        </div>
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="text-box">
                                                <span><i className="far fa-envelope"></i></span>
                                                <input type="email" placeholder="Your email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="text-box">
                                                <span><i className="fas fa-arrow-right"></i></span>
                                                <input type="text" placeholder="Your Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="message-box">
                                                <span><i className="far fa-edit"></i></span>
                                                <textarea name="message" cols="30" rows="10" placeholder="Your Massage"></textarea>
                                                <button className="thm-btn" type="submit"><i className="far fa-paper-plane"></i> Send massage</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ContactForm