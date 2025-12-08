import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import '../styles/Layout.css'

function Layout() {
  const location = useLocation()
  let backgroundClass = ''

  if(location.pathname === '/') backgroundClass = 'bg-homepage'
  if(location.pathname === '/shopping') backgroundClass = 'bg-shopping-page'
  if(location.pathname === '/cart') backgroundClass = 'bg-cart-page'
  return (
    <div className={`layout ${backgroundClass}`}>
      <Navbar />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
