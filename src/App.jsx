import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";
import Service from "./pages/Service";
import Blog from "./pages/Blog";

import Project from "./pages/Project";

import BlogDetails from "./components/Blog/BlogDetails";

import PreConstruction from "./components/Service/Servicesdetail/PreConstruction";
import Construction from "./components/Service/Servicesdetail/Construction";
import Management from "./components/Service/Servicesdetail/Management";
import General from "./components/Service/Servicesdetail/General";
import Building from "./components/Service/Servicesdetail/Building";
import Design from "./components/Service/Servicesdetail/Design";
import Project1 from "./components/Project/ProjectDetails/Project1";
import ScrollToTop from "./components/ScrollToTop";
import Project2 from "./components/Project/ProjectDetails/Project2";
import Project3 from "./components/Project/ProjectDetails/Project3";
import Project4 from "./components/Project/ProjectDetails/Project4";
import Project5 from "./components/Project/ProjectDetails/Project5";
import Project6 from "./components/Project/ProjectDetails/Project6";
import Project7 from "./components/Project/ProjectDetails/Project7";
import Project8 from "./components/Project/ProjectDetails/Project8";
import Project9 from "./components/Project/ProjectDetails/Project9";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Service />} />
          <Route path="project" element={<Project />} />
          <Route path="project/project1" element={<Project1 />} />
          <Route path="project/project2" element={<Project2 />} />
          <Route path="project/project3" element={<Project3 />} />
          <Route path="project/project4" element={<Project4 />} />
          <Route path="project/project5" element={<Project5 />} />
          <Route path="project/project6" element={<Project6 />} />
          <Route path="project/project7" element={<Project7 />} />
          <Route path="project/project8" element={<Project8 />} />
          \ <Route path="project/project9" element={<Project9 />} />
          <Route path="blog" element={<Blog />} />
          <Route
            path="services/pre-construction"
            element={<PreConstruction />}
          />
          <Route path="services/construction" element={<Construction />} />
          <Route path="services/management" element={<Management />} />
          <Route path="services/general" element={<General />} />
          <Route path="services/building" element={<Building />} />
          <Route path="services/design" element={<Design />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
