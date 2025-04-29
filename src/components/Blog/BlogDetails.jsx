import React from "react";
import { useParams } from "react-router-dom";
import img1 from "/blog/blog01.jpg";
import img2 from "/blog/blog02.jpg";
import img3 from "/blog/blog03.jpeg";
import img4 from "/blog/blog04.jpg";
import img5 from "/blog/blog05.jpg";
import img6 from "/blog/blog06.jpg";

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
        "In an industry as dynamic and fast-paced as construction, staying informed isn't just helpful — it’s essential. Every year, new technologies emerge, regulations shift, and design trends evolve. Whether you're a seasoned builder, an architect, a developer, or simply passionate about construction, having a reliable source for news and insights is key to staying ahead.",

      description2:
        "At Earth Designer and Developer, we are proud to be your trusted source for everything happening in the world of construction. Here’s what you can expect when you stay connected with us:",

      title: {
        title1: "1. Up-to-Date Industry News",
        title1Content:
          "The construction landscape changes rapidly. From new building codes to emerging market opportunities, being informed is critical for making smart decisions. We bring you real-time updates on regulatory changes, major project announcements, labor market shifts, and technological breakthroughs so you never miss a beat.",

        title2: "2. Insights Into Emerging Technologies",
        title2Content:
          "Technology is reshaping construction like never before — drones, robotics, 3D printing, AI project management tools, and smart materials are revolutionizing the way we build. We dive deep into these innovations, offering detailed analyses, case studies, and expert interviews to help you understand how these advancements can be leveraged in your projects.",

        title3: "3. Trends in Sustainable Building",
        title3Content:
          "Sustainability is no longer optional — it's the future of construction. From green building certifications to eco-friendly materials and energy-efficient designs, we cover the latest sustainability trends that are transforming construction practices. Learn how to reduce your carbon footprint, improve energy performance, and create healthier environments.",

        title4: "4. Best Practices and Professional Guidance",
        title4Content:
          "Success in construction goes beyond technical know-how. It’s about leadership, project management, financial planning, and customer relations. We provide practical advice and professional tips from seasoned experts to help you grow your skills, lead better teams, and deliver outstanding results on every project.",

        title5: "Why Trust?",
        title5Content:
          "At Earth Designer and Develop, we combine deep industry knowledge with a passion for accuracy, innovation, and community building. Our team is committed to delivering reliable, up-to-date information that construction professionals can truly depend on. We don’t just report news — we provide thoughtful analysis, expert opinions, and actionable insights that help you stay ahead of industry trends. With a strong focus on sustainability, emerging technologies, and professional growth, we aim to empower builders, developers, and leaders to build smarter, safer, and more efficiently. When you rely on [Your Company Name], you're choosing a partner who genuinely understands the construction world and is dedicated to helping you succeed.",
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
    title: "Expert Insights on Modern Construction Methods and Innovation",
    description: {
      description1:
        "The construction industry is evolving at a rapid pace, fueled by technological advancements, new materials, and the need for more sustainable and efficient building practices. Today, innovation isn’t just an advantage — it's a necessity. At [Your Company Name], we bring you expert insights into the modern construction methods that are reshaping how we build the world around us.",

      description2:
        "Traditional construction practices, while foundational, often face challenges like project delays, cost overruns, and environmental concerns. Modern methods of construction (MMC) offer solutions by emphasizing speed, quality, safety, and sustainability. Techniques such as modular construction, prefabrication, and 3D printing are no longer futuristic ideas — they are happening right now on job sites across the globe.",

      title: {
        title1: "1. Modular and Prefabricated Construction",
        title1Content:
          "Modular construction involves building sections of a structure off-site under controlled conditions and then assembling them on-site. This method dramatically reduces construction time and minimizes waste. Prefabrication also improves quality control, as components are manufactured using precise technologies in factory environments.",

        title2: "2. 3D Printing in Construction",
        title2Content:
          "Imagine printing an entire house! 3D printing is revolutionizing the industry by allowing builders to create complex structures faster and with less material waste. Concrete 3D printing, in particular, is paving the way for affordable housing solutions and unique architectural designs.",

        title3: "3. Green Building Technologies",
        title3Content:
          "Sustainability is at the heart of modern innovation. From solar panels integrated into building materials to smart energy systems and eco-friendly insulation, today's construction projects are designed to reduce carbon footprints while enhancing living comfort.",

        title4: "4. Building Information Modeling (BIM)",
        title4Content:
          "BIM technology enables detailed 3D modeling of buildings before construction even begins. This not only improves collaboration among architects, engineers, and contractors but also identifies potential issues early, reducing costly mistakes during construction.",

        title5: "Why Innovation Matters",
        title5Content:
          "Industry experts agree that adopting modern construction methods is not just about staying current — it’s about creating buildings that are more resilient, efficient, and aligned with future needs. Innovation helps address labor shortages, meets stricter environmental regulations, and delivers better outcomes for clients and communities alike.",
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
        "The construction and design industries are undergoing an exciting transformation. Driven by advancements in technology, sustainability efforts, and creative innovation, today’s projects are smarter, faster, and more visionary than ever before. At [Your Company Name], we help you stay ahead by highlighting the latest developments shaping the future of building and design.",

      description2: "Innovations in Design",

      title: {
        title1: "1. Biophilic Design",
        title1Content:
          "Connecting people with nature through design is more than a trend; it's a movement. Biophilic design incorporates natural elements like greenery, natural light, and organic materials into architecture to promote well-being and boost productivity.",

        title2: "2. Adaptive Reuse and Renovation",
        title2Content:
          "Instead of demolishing old structures, many designers and architects are embracing adaptive reuse — creatively repurposing existing buildings for new uses. This not only preserves historical charm but also supports sustainability by reducing the need for new materials.",

        title3: "3. Smart and Responsive Interiors",
        title3Content:
          "Interior design is also getting smarter. Homes and commercial spaces now feature responsive technologies that adjust lighting, temperature, and even furniture settings based on personal preferences, enhancing comfort and energy efficiency.",

        title4: "Why Keeping Up Matters",
        title4Content:
          "Understanding and adopting the latest developments in construction and design is key to staying competitive in today’s market. Clients are more informed than ever, seeking builders and designers who can deliver not just beauty, but also functionality, sustainability, and innovation.",
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
        "Starting a construction project — whether it's building your dream home, designing a commercial space, or launching a major infrastructure development — can feel overwhelming. With so many details to manage, decisions to make, and challenges to overcome, having the right guidance makes all the difference. At Earth Designer and Developer, we’re committed to supporting you through every stage of your construction journey, from the first idea to the final touch.",

      //   description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Planning and Preparation",
        title1Content:
          "Every successful construction project starts with careful planning. We work closely with you to understand your goals, set a clear vision, and establish a realistic budget. Our team helps identify potential challenges early on and creates a detailed roadmap that ensures your project stays on track from the very beginning.",

        title2: "2. Design and Innovation",
        title2Content:
          "Design is more than just aesthetics — it’s about functionality and future-readiness. We guide you through the design phase by combining creative ideas with the latest industry trends and sustainable practices. Our experts help you make smart choices that not only look impressive but also add long-term value to your project.",

        title3: "3. Building and Execution",
        title3Content:
          "This is where your vision begins to take shape. During the construction phase, we manage all the moving parts — from coordinating contractors to ensuring high-quality workmanship. With clear communication and regular updates, we make sure the project progresses smoothly, meets deadlines, and sticks to the planned budget.",

        title4: "4. Final Touches and Quality Assurance",
        title4Content:
          "The finishing phase is critical to delivering a polished and lasting result. We oversee final inspections, ensure attention to detail in every corner, and fix any last-minute issues. Our team doesn’t just walk away once construction ends — we make sure everything meets your expectations before project handover.",

        title5: "5. Ongoing Support and Trust",
        title5Content:
          "Even after project completion, our commitment continues. We provide ongoing support to handle any post-construction needs and ensure that you are fully satisfied. Our approach is built on trust, transparency, and a genuine partnership, making sure you feel confident and supported at every step of your construction journey.",
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
    slug: "blog06",
    title: "Where Construction Expertise Meets Real World Experience",
    description: {
      description1:
        "In today’s ever-evolving construction world, true success lies where technical expertise meets hands-on, real-world experience. It's not just about knowing the best methods — it's about having lived them, adapted them, and mastered them on actual sites. At [Your Company Name], we blend deep industry knowledge with practical, on-the-ground experience to guide projects from concept to completion with confidence and excellence.",

      description2: "Here’s how smart construction is reshaping the future:",

      title: {
        title1: "1. Deep Industry Knowledge",
        title1Content:
          "We bring years of specialized construction knowledge to every project. From understanding building codes to mastering the latest construction technologies, our expertise ensures that your project is built to the highest standards. We don’t just know the theory — we apply it effectively in real-world scenarios.",

        title2: "2. Hands-On Project Management",
        title2Content:
          "Real-world experience teaches lessons that books can’t. Our team has managed projects of all sizes and complexities, learning how to navigate unexpected challenges on the ground. We use this experience to anticipate issues before they arise, keeping your project on schedule and within budget.",

        title3: "3. Commitment to Quality Craftsmanship",
        title3Content:
          "Expertise alone isn’t enough without a commitment to delivering quality. Our experience in the field has taught us the value of precision, durability, and attention to detail. Every decision we make — from material selection to construction methods — reflects our dedication to excellence.",

        title4: "4. Practical Problem Solving",
        title4Content:
          "Construction projects often come with surprises, but real-world experience gives us the tools to solve problems quickly and smartly. Instead of theoretical solutions, we offer practical, proven strategies that keep work moving forward without compromising on quality.",

        title5: "5. Building Trust Through Results",
        title5Content:
          "At the intersection of expertise and experience, trust is built. We focus not just on completing projects, but on exceeding expectations. Our hands-on knowledge allows us to deliver results that speak for themselves, creating lasting relationships with our clients based on honesty, reliability, and superior work.",
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
