import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why Integrated Design & Construction Saves You Time & Money",
    date: "April 23, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog01.jpeg",
    link: "/blog-details/1",
  },
  {
    id: 2,
    title: "Top 5 Architectural Design Trends in 2025",
    date: "April 10, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog02.jpg",
    link: "/blog-details/2",
  },
  {
    id: 3,
    title: "How to Plan a Successful Construction Project",
    date: "March 30, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog03.jpeg",
    link: "/blog-details/3",
  },
  {
    id: 4,
    title: "Sustainable Building: What You Need to Know",
    date: "March 15, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog04.jpg",
    link: "/blog-details/4",
  },
  {
    id: 5,
    title: "Why Good Design Adds Real Value to Property",
    date: "February 28, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog05.jpg",
    link: "/blog-details/5",
  },
  {
    id: 6,
    title: "Commercial vs Residential Construction Explained",
    date: "February 10, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog06.jpg",
    link: "/blog-details/6",
  },
];

function BlogContent() {
  return (
    <section className="blog-area gray-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={post.id}>
              <div className="single-blog mb-30">
                <div className="blog-thumb">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="uniform-img"
                  />
                </div>
                <div className="b-content">
                  <div className="b-meta mb-10">
                    <span>
                      <Link to="#">
                        <i className="fas fa-user"></i> {post.author}
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-calendar-alt"></i> {post.date}
                      </Link>
                    </span>
                  </div>
                  <div className="b-text mb-15">
                    <h3>
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                  </div>
                  <div className="b-btn">
                    <Link to={post.link}>
                      Read More <i className="ti-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="row">
          <div className="col-12">
            <div className="basic-pagination text-center mt-35">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fas fa-angle-double-left"></i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">01</Link>
                </li>
                <li>
                  <Link to="#">02</Link>
                </li>
                <li>
                  <Link to="#">03</Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-ellipsis-h"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-angle-double-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
