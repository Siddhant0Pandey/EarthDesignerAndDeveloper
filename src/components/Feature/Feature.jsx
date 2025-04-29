import React from 'react'
import { Link } from 'react-router-dom'

function Feature() {
    const backgroundImage = 'url(/img/feature-bg.jpg)';
  return (
    <section className="feature-area pt-120 pb-90"  style={{ backgroundImage: backgroundImage, backgroundSize: 'cover'}}>
        {/* src\assets\img\bg\feature-bg.jpg */}
                <div className="container">
                    <div className="section-title text-center">
                        <div className="border-title">
                            <h1>featured</h1>   
                        </div>
                        <h5>featured</h5>
                        <h2>explore the features</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="feature-single mb-30">
                                <div className="feature-thumb">
                                    <img src="src/assets/img/feature/feature-01.jpg" alt="image_not_found"/>
                                </div>
                                <div className="feature-text">
                                    <h4>explore the features</h4>
                                    <h2><Link to="#">Interior Design</Link></h2>
                                    <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="feature-single mb-30">
                                <div className="feature-thumb">
                                    <img src="src/assets/img/feature/feature-02.jpg" alt="image_not_found"/>
                                </div>
                                <div className="feature-text">
                                    <h4>explore the features</h4>
                                    <h2><Link to="#">construction</Link></h2>
                                    <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="feature-single mb-30">
                                <div className="feature-thumb">
                                    <img src="src/assets/img/feature/feature-03.jpg" alt="image_not_found"/>
                                </div>
                                <div className="feature-text">
                                    <h4>explore the features</h4>
                                    <h2><Link to="#">building repair</Link></h2>
                                    <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Feature