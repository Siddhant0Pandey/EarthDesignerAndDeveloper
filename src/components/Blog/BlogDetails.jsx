import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/img/blog/blog01.jpg";
import img2 from "../../assets/img/blog/blog02.jpg";
import img3 from "../../assets/img/blog/blog03.jpeg";
import img4 from "../../assets/img/blog/blog04.jpg";
import img5 from "../../assets/img/blog/blog05.jpg";
import img6 from "../../assets/img/blog/blog06.jpg";

const blogPosts = [
  // blog01 starts here
  {
    id: 1,
    slug: "blog01",
    title: "Building a Better Tomorrow with Smart Construction Solutions",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "April 23, 2025",
    author: "Admin",
    image: img1,
  },
  // blog01 ends here

  // blog02 starts from here
  {
    id: 2,
    slug: "blog02",
    title: "Your Trusted Source for Construction News and Industry Trends",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "April 10, 2025",
    author: "Admin",
    image: img2,
  },
  //   blogs02 ends here

  // blogs03 starts here
  {
    id: 3,
    slug: "blog03",
    title: "HExpert Insights on Modern Construction Methods and Innovation",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "March 30, 2025",
    author: "Admin",
    image: img3,
    link: "/blog/blog03",
  },
  //   blog03 ends here

  // blogs04 starts here
  {
    id: 4,
    slug: "blog04",
    title: "Discover the Latest Developments in Construction and Design",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "March 15, 2025",
    author: "Admin",
    image: img4,
    link: "/blog/blog04",
  },
  //   blog04 ends here

  // blog05 starts here
  {
    id: 5,
    slug: "blog05",
    title: "Guiding You Through Every Step of Your Construction Journey",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "February 28, 2025",
    author: "Admin",
    image: img5,
    link: "/blog/blog05",
  },
  //   blog05 ends here

  // blog06 starts here
  {
    id: 6,
    slug: "blog0",
    title: "Where Construction Expertise Meets Real World Experience",
    description: {
      description1:
        "The construction industry is evolving — and with it, the way we build our cities, homes, and infrastructure. No longer is construction just about bricks, steel, and concrete. Today, it's about innovation, sustainability, and smarter solutions that lead to stronger, safer, and more efficient projects.At the heart of this transformation are smart construction solutions — technologies, strategies, and methods designed to create a better tomorrow.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Technology-Driven Efficiency",
        title1Content:
          "Smart construction embraces the latest technology to make projects faster, safer, and more accurate. From drones surveying job sites to 3D printing parts and AI-driven project management software, technology is cutting down errors, reducing waste, and improving communication. These innovations mean fewer delays, lower costs, and higher quality outcomes — key elements for building a stronger future.",

        title2: "2. Integrated Project Delivery",
        title2Content:
          "The days of fragmented construction processes are fading. Smart construction uses models like Integrated Project Delivery (IPD) and Design-Build to bring architects, engineers, and contractors together from the start. This collaborative approach improves communication, solves problems faster, and ensures that projects are delivered on time and on budget — critical factors in keeping up with today’s growing demands.",

        title3: "3. Emphasis on Safety",
        title3Content:
          "Safety has always been important, but smart construction takes it to the next level.With tools like wearable tech, real-time site monitoring, and automated hazard detection systems, worker safety is dramatically improved.A safer job site means fewer injuries, fewer delays, and a workforce that feels valued and protected — key components for a resilient industry.",

        title4: "4. Data-Driven Decision Making",
        title4Content:
          "Smart construction projects collect massive amounts of data — from soil conditions to material performance to energy usage.By analyzing this data, project managers can make better decisions, predict potential issues before they arise, and optimize every aspect of a build.The result? Projects that are not just completed — but completed better, with stronger outcomes and smarter resource management.",

        title5: "Why It Matters",
        title5Content:
          "As we face growing populations, climate challenges, and evolving needs for urban spaces, the construction industry must innovate.Smart construction solutions are not just 'nice to have' — they are essential tools for building cities and communities that are sustainable, livable, and future-ready.By embracing technology, prioritizing sustainability, promoting safety, and fostering collaboration, we are truly building a better tomorrow — one smart solution at a time.",
      },
    },
    date: "February 10, 2025",
    author: "Admin",
    image: img6,
    link: "/blog/blog06",
  },
  //   blog06 ends here
];
function BlogDetails() {
  const { slug } = useParams();
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <>
      <div className="container">
        <h1>{blog.title}</h1>
        <p style={{ color: "black" }}>
          By {blog.author} on {blog.date}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "auto" }}
        />
        <p style={{ paddingTop: "10px", color: "black" }}>
          {blog.description.description1}
        </p>
        <p style={{ color: "black" }}>{blog.description.description2}</p>
        <h2 style={{ paddingTop: "15px" }}>{blog.description.title.title1}</h2>
        <p style={{ color: "black" }}>{blog.description.title.title1Content}</p>
        <h2 style={{ paddingTop: "15px" }}>{blog.description.title.title2}</h2>
        <p style={{ color: "black" }}>{blog.description.title.title2Content}</p>
        <h2 style={{ paddingTop: "15px" }}>{blog.description.title.title3}</h2>
        <p style={{ color: "black" }}>{blog.description.title.title3Content}</p>
        <h2 style={{ paddingTop: "15px" }}>{blog.description.title.title4}</h2>
        <p style={{ color: "black" }}>{blog.description.title.title4Content}</p>
        <h2 style={{ paddingTop: "15px" }}>{blog.description.title.title5}</h2>
        <p style={{ color: "black", paddingBottom: "50px" }}>
          {blog.description.title.title5Content}
        </p>
      </div>
    </>
  );
}

export default BlogDetails;
