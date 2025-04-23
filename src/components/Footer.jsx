import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div className="footer-area footer-height pt-40 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="footer-left-widget mb-40">
                        <div className="footer-logo">
                            <img src="src/assets/img/logo/logo-02.png" alt="logo_not_found"/>
                        </div>
                        <p>We are a dedicated team of civil engineers, designers, and developers with over 20 years of experience delivering high-quality construction projects.</p>
                        <div className="footer-social mt-40">
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fas fa-rss"></i></Link>
                            <Link to="#"><i className="fab fa-whatsapp"></i></Link>
                            <Link to="#"><i className="fab fa-facebook"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6">
                    <div className="footer-widget footer-widget-space mb-40">
                        <h3>contact us</h3>
                        <ul className="footer-info">
                            <li>
                                <div className="footer-address mt-20">
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                    <h5>786/Link Romada tower mall Brooklyn, NYC</h5>
                                </div>
                            </li>
                            <li>
                                <div className="footer-address mt-20">
                                    <span><i className="fas fa-phone-alt"></i></span>
                                    <h5>018- 375878-345</h5>
                                    <h5>9373 93243 - 783</h5>
                                </div>
                            </li>
                            <li>
                                <div className="footer-address mt-20">
                                    <span><i className="fas fa-envelope-open-text"></i></span>
                                    <h5>info@yourmail.com</h5>
                                    <h5>jobsinfo@webmail.com</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-1 offset-xl-1 col-lg-6 col-md-6 pr-0 mb-40">
                    <div className="footer-widget footer-link">
                        <h3>Quick links</h3>
                        <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/process">Our process</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/">Our Clients</Link></li>
                            <li><Link to="#">Our Team</Link></li>
                            <li><Link to="/blog">Latest News</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6 pr-0">
                    <div className="footer-widget footer-gallery">
                        <h3>Work Gallery</h3>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-01.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-01.jpg"></Link>
                            </div>
                        </div>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-02.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-02.jpg"></Link>
                            </div>
                        </div>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-03.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-03.jpg"></Link>
                            </div>
                        </div>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-04.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-04.jpg"></Link>
                            </div>
                        </div>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-05.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-05.jpg"></Link>
                            </div>
                        </div>
                        <div className="footer-gallery-item">
                            <div className="footer-gallery-thumb">
                                <img src="src/assets/img/footer/footer-gallery/fg-06.jpg" alt="image_not_found"/>
                            </div>
                            <div className="link-img">
                                <Link className="popup-image" to="src/assets/img/footer/footer-gallery/fg-big-06.jpg"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area pt-20 pb-20">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="copyright-text text-center">
                        <p>Copyright by @ Earth Designer and Builders - 2021.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer