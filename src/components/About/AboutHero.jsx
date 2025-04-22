import React from 'react'
import { Link } from 'react-router-dom'

function AboutHero() {
  return (
    <section className="about-area pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <Link className="nav-item nav-link" id="nav-01-tab" data-toggle="tab" to="#nav-01"
                                            role="tab" aria-controls="nav-01" aria-selected="false">
                                            <div className="about-tab-item">
                                                <div className="about-tab-thumb">
                                                    <img src="img/icon/a01.png" alt="image_not_found"/>
                                                </div>
                                                <div className="about-tab-content">
                                                    <h4>architecture Design</h4>
                                                    <p>Rorem ipsoum doler sitey.Rorem psoum doler siteyoly.</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className="nav-item nav-link active" id="nav-02-tab" data-toggle="tab"
                                            to="#nav-02" role="tab" aria-controls="nav-02" aria-selected="true">
                                            <div className="about-tab-item">
                                                <div className="about-tab-thumb">
                                                    <img src="img/icon/a02.png" alt="image_not_found"/>
                                                </div>
                                                <div className="about-tab-content">
                                                    <h4>Build construction</h4>
                                                    <p>Rorem ipsoum doler sitey.Rorem psoum doler siteyoly.</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className="nav-item nav-link" id="nav-03-tab" data-toggle="tab"
                                            to="#nav-03" role="tab" aria-controls="nav-03" aria-selected="false">
                                            <div className="about-tab-item">
                                                <div className="about-tab-thumb">
                                                    <img src="img/icon/a03.png" alt="image_not_found"/>
                                                </div>
                                                <div className="about-tab-content">
                                                    <h4>Building renovation</h4>
                                                    <p>Rorem ipsoum doler sitey.Rorem psoum doler siteyoly.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade" id="nav-01" role="tabpanel" aria-labelledby="nav-01-tab">
                                        <div className="about-wrapper pt-120">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="about-left pos-rel">
                                                        <div className="border-title-2">
                                                            <h1>About</h1>
                                                        </div>
                                                        <div className="about-title mb-20">
                                                            <h5>About us !</h5>
                                                            <h2>We believe in the power of great ideas<span>.</span></h2>
                                                        </div>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.</p>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..</p>
                                                        <ul className="about-info mt-30 mb-30">
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Noterjon PlLabore ar Rerom ipsum</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="about-btn pt-20">
                                                            <Link to="service-details.html" className="thm-btn">Learn More</Link>
                                                            <Link to="about.html" className="about-l-btn">Learn More <i className="ti-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="about-right pos-rel">
                                                        <div className="about-right-content">
                                                            <h1>29<span>+</span></h1>
                                                            <h5>Years</h5>
                                                            <h3>of Experience</h3>
                                                        </div>
                                                        <div className="about-right-thumb">
                                                            <img src="img/bg/about-bg.png" alt="image_not_found"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="nav-02" role="tabpanel" aria-labelledby="nav-02-tab">
                                        <div className="about-wrapper pt-120">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="about-left pos-rel">
                                                        <div className="border-title-2">
                                                            <h1>About</h1>
                                                        </div>
                                                        <div className="about-title mb-20">
                                                            <h5>About us !</h5>
                                                            <h2>We believe in the power of great ideas<span>.</span></h2>
                                                        </div>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.</p>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..</p>
                                                        <ul className="about-info mt-30 mb-30">
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Noterjon PlLabore ar Rerom ipsum</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="about-btn pt-20">
                                                            <Link to="service-details.html" className="thm-btn">Learn More</Link>
                                                            <Link to="about.html" className="about-l-btn">Learn More <i className="ti-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="about-right pos-rel">
                                                        <div className="about-right-content">
                                                            <h1>29<span>+</span></h1>
                                                            <h5>Years</h5>
                                                            <h3>of Experience</h3>
                                                        </div>
                                                        <div className="about-right-thumb">
                                                            <img src="img/bg/about-bg.png" alt="image_not_found"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-03" role="tabpanel" aria-labelledby="nav-03-tab">
                                        <div className="about-wrapper pt-120">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="about-left pos-rel">
                                                        <div className="border-title-2">
                                                            <h1>About</h1>
                                                        </div>
                                                        <div className="about-title mb-20">
                                                            <h5>About us !</h5>
                                                            <h2>We believe in the power of great ideas<span>.</span></h2>
                                                        </div>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed doklyeiusm tempor incididunt ut labore etry of the siely.</p>
                                                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Royality of the best sede..</p>
                                                        <ul className="about-info mt-30 mb-30">
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Noterjon PlLabore ar Rerom ipsum</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="about-info-title">
                                                                    <span><i className="fas fa-check"></i></span>
                                                                    <h5>Quisque Placereat Mnetur Fermnatu nussey</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="about-btn pt-20">
                                                            <Link to="service-details.html" className="thm-btn">Learn More</Link>
                                                            <Link to="about.html" className="about-l-btn">Learn More <i className="ti-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="about-right pos-rel">
                                                        <div className="about-right-content">
                                                            <h1>29<span>+</span></h1>
                                                            <h5>Years</h5>
                                                            <h3>of Experience</h3>
                                                        </div>
                                                        <div className="about-right-thumb">
                                                            <img src="img/bg/about-bg.png" alt="image_not_found"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default AboutHero