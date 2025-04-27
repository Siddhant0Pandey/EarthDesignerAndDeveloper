import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why Integrated Design & Construction Saves You Time & Money",
    date: "April 23, 2025",
    author: "Admin",
    image: "/assets/img/blog/blog01.jpeg",
    content: "Here is full content for blog post 1...",
  },
  {
    id: 2,
    title: "Top 5 Architectural Design Trends in 2025",
    date: "April 10, 2025",
    author: "Admin",
    image: "/assets/img/blog/blog02.jpg",
    content: "Here is full content for blog post 2...",
  },
  // ... (other posts)
];

function BlogDetails() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h2>Blog Post Not Found</h2>;
  }

  return (
    <section className="blog-details pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-detail-wrapper">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid mb-30"
              />
              <h2>{blog.title}</h2>
              <div className="blog-meta mb-20">
                <span>
                  <i className="fas fa-user"></i> {blog.author}
                </span>
                <span>
                  <i className="far fa-calendar-alt"></i> {blog.date}
                </span>
              </div>
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
