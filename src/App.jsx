import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Project from "./pages/Project"

import BlogDetails from "./components/Blog/BlogDetails";

// import Construction from "./components/Service/Servicesdetail/construction";
import PreConstruction from "./components/Service/Servicesdetail/PreConstruction";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Service />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />

          <Route
            path="services/pre-construction"
            element={<PreConstruction />}
          />

          <Route path="/blog/:slug" element={<BlogDetails />} />
          

          <Route path="services/construction" element={<Construction />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
