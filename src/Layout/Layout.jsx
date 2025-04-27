import { Outlet } from "react-router-dom"; 
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopButton from "../ui/ScrollToTopButton";

function Layout() {
  return (
    <div>
      <Navbar />

      <div className="content">
        <Outlet />
      </div>
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
}

export default Layout;
