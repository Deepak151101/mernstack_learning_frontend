import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

import { UserContext } from "../App";

const Navbar = () => {

  const { state , dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    // If user is logged in it can be known by 'state'
    if(state) {
      return(
        <>
          <li className="nav-item active">
              <NavLink className="nav-link px-2" to="/">
                Home <span class="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
        </>
      )
    } else { // If user is not logged in
      return (
        <>
          <li className="nav-item active">
              <NavLink className="nav-link px-2" to="/">
                Home <span class="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          <li className="nav-item px-2">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/signup">
                Register
              </NavLink>
            </li>
        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" className="logo"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto px-4">

            <RenderMenu />

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
