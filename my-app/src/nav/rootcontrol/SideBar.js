import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function SideBar() {
  return (
    <div className="container"> 
      <nav className="navbar navbar-dark align-items-start p-0">
        <div className="container-fluid d-flex flex-column p-0">
            <div className="sidebar-header font-weight-bold text-white">
              <span>Root Control Navigation</span>
            </div>
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <Link className="nav-link" to="/rootcontrol/map">
                <span className="oi oi-dashboard" />
                &nbsp;Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rootcontrol/table">
                <span className="oi oi-magnifying-glass" />
                &nbsp;Pay App Table
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rootcontrol/submission">
                <span className="oi oi-plus" />
                &nbsp;Form Submission
              </Link>
              <Link className="nav-link" to="/rootcontrol/dashboard">
                <span className="oi oi-plus" />
                &nbsp;Dash Board
              </Link>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
