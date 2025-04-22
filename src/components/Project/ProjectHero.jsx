import React from 'react'
import { Link } from 'react-router-dom'

function ProjectHero() {
  return (
    <section className="project-area pos-rel pt-120 pb-120">
    <div className="container-fluid">
        <div className="section-title text-center mb-100">
            <div className="border-title">
                <h1>Project</h1>
            </div>
            <h5>Our Project</h5>
            <h2>project that we complete<span>.</span></h2>
        </div>
        <div className="project-active owl-carousel">
            <div className="single-project">
                <div className="project-thumb">
                    <img src="img/project/project-01.jpg" alt="image_not_found"/>
                </div>
                <div className="project-text">
                    <div className="project-tag">
                        <h4><Link to="#">construction</Link></h4>
                    </div>
                    <div className="project-text-box">
                        <h3><Link to="#">Rasalina De Wily Resort</Link></h3>
                        <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
            <div className="single-project">
                <div className="project-thumb">
                    <img src="img/project/project-02.jpg" alt="image_not_found"/>
                </div>
                <div className="project-text">
                    <div className="project-tag">
                        <h4><Link to="#">architecture</Link></h4>
                    </div>
                    <div className="project-text-box">
                        <h3><Link to="#">Rasalina De Wily Resort</Link></h3>
                        <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
            <div className="single-project">
                <div className="project-thumb">
                    <img src="img/project/project-03.jpg" alt="image_not_found"/>
                </div>
                <div className="project-text">
                    <div className="project-tag">
                        <h4><Link to="#">renovation</Link></h4>
                    </div>
                    <div className="project-text-box">
                        <h3><Link to="#">Rasalina De Wily Resort</Link></h3>
                        <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
            <div className="single-project">
                <div className="project-thumb">
                    <img src="img/project/project-02.jpg" alt="image_not_found"/>
                </div>
                <div className="project-text">
                    <div className="project-tag">
                        <h4><Link to="#">renovation</Link></h4>
                    </div>
                    <div className="project-text-box">
                        <h3><Link to="#">Rasalina De Wily Resort</Link></h3>
                        <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProjectHero