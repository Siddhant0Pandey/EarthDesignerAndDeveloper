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
