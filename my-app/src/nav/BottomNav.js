import React from "react";

import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function BottomNav() {
  return (

      <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light col-8">
              <Link className="nav-link" to="/">
                <span className="oi oi-dashboard" />
                &nbsp;Home
              </Link>
              <Link className="nav-link" to="/rootcontrol">
                <span className="oi oi-dashboard" />
                &nbsp;Root Control
              </Link>
              <Link className="nav-link" to="/piperehab">
                <span className="oi oi-dashboard" />
                &nbsp;Pipe Rehab
              </Link>
              <Link className="nav-link" to="/manholerehab">
                <span className="oi oi-dashboard" />
                &nbsp;Manhole Rehab
              </Link>
              <Link className="nav-link" to="/easement">
                <span className="oi oi-dashboard" />
                &nbsp;Easement Clearing
              </Link>
      </nav>
  );
}

export default BottomNav;
