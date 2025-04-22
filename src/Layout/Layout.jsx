import { Outlet } from 'react-router-dom'; // this renders child routes
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div>
      <Navbar/>
      
     
      <div className="content">
        <Outlet />  
      </div>

  <Footer/>
    </div>
  );
}

export default Layout;
