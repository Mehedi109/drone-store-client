import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const openSidebar = () => {
  //   setSidebarOpen(true);
  // };

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // };
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <div onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <Nav.Link as={Link} to="/home" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/allProducts" className="text-dark">
            MoreProducts
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" className="text-dark">
            Dashboard
          </Nav.Link>
        </ul>
      </nav>
    </div>
  );
}
