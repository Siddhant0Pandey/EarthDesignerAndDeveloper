import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Why Integrated Design & Construction Saves You Time & Money",
    date: "April 23, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog01.jpg",
    link: "blog-details.html",
  },
  {
    id: 2,
    title: "Top 5 Architectural Design Trends in 2025",
    date: "April 10, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog02.jpg",
    link: "blog-details.html",
  },
  {
    id: 3,
    title: "How to Plan a Successful Construction Project",
    date: "March 30, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog03.jpg",
    link: "blog-details.html",
  },
  {
    id: 4,
    title: "Sustainable Building: What You Need to Know",
    date: "March 15, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog04.jpg",
    link: "blog-details.html",
  },
  {
    id: 5,
    title: "Why Good Design Adds Real Value to Property",
    date: "February 28, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog05.jpg",
    link: "blog-details.html",
  },
  {
    id: 6,
    title: "Commercial vs Residential Construction Explained",
    date: "February 10, 2025",
    author: "Admin",
    image: "src/assets/img/blog/blog06.jpg",
    link: "blog-details.html",
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
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="b-content">
                  <div className="b-meta mb-10">
                    <span>
                      <a href="#">
                        <i className="fas fa-user"></i> {post.author}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-calendar-alt"></i> {post.date}
                      </a>
                    </span>
                  </div>
                  <div className="b-text mb-15">
                    <h3>
                      <a href={post.link}>{post.title}</a>
                    </h3>
                  </div>
                  <div className="b-btn">
                    <a href={post.link}>
                      Read More <i className="ti-angle-right"></i>
                    </a>
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
                  <a href="#">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">01</a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
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
