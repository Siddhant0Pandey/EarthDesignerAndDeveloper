import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="left">
                                <li><span><i className="far fa-clock"></i></span> 9:30am - 6:30pm Mon - Sun</li>
                                <li><span><i className="fas fa-phone-alt"></i></span> +800-123-4567 6587</li>
                                <li><span><i className="fas fa-map-marker-alt"></i></span> Anmoore Road Brooklyn, NY 230</li>
                            </ul>
                            <ul className="right">
                                <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                <li><a href="#"><i className="fas fa-rss"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo logo-2">
                                <a href="index.html"><img src="./src/assets/img/logo/logo.png" alt="logo_not_found"/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10">
                            <div className="header-button d-none d-lg-block f-right">
                                <a className="thm-btn" href="#">Get a quote</a>
                            </div>
                            <div className="main-menu f-right">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a>
                                            
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="services.html">Services +</a>
                                            <ul className="submenu">
                                                <li><a href="services.html">Service</a></li>
                                                <li><a href="services-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="project.html">Project +</a>
                                            <ul className="submenu">
                                                <li><a href="project.html">Project</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                            </ul>
                                        </li>
                                        {/* <li><a href="#">Pages +</a>
                                            <ul className="submenu">
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="services-details.html">Services Details</a></li>
                                                <li><a href="process.html">Process</a></li>
                                                <li><a href="project.html">Project</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </li> */}
                                        <li><a href="blog.html">Blog +</a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Navbar;
