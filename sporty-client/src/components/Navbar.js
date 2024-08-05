import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index.js";
import axios from "axios";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navitems = [
    { page: "Home", href: "/" },
    { page: "News", href: "/news" },
    { page: "Live-Score", href: "/livescore" },
    { page: "About", href: "/about" },
    { page: "Subscription", href: "/subscription" },
  ];
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log("Navbar - User:", user);
    console.log("Navbar - Is Authorized:", isAuthorized);
  }, [user, isAuthorized]);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/auth/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      localStorage.removeItem("isAuthorized");
      localStorage.removeItem("user");
      navigateTo("/signin");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <header className={isAuthorized ? "navbarShow" : "navbarHide"}>
        <div className="logo">SPORTY</div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul className={!show ? "menu" : "show-menu menu"}>
            {navitems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  activeClassName="active"
                  onClick={() => setShow(false)}
                >
                  {item.page}
                </NavLink>
              </li>
            ))}
            {isAuthorized ? (
              <>
                <li>
                  <button onClick={handleLogout} id="logout_btn">
                    LOGOUT
                  </button>
                </li>
                <li>
                  <div class="profile-container">
                    <CgProfile style={{ color: "white", fontSize: "25px" }} />
                    <div class="profile-info" id="profileInfo">
                      <p>{`Name: ${user.name}`}</p>
                      <p>{`Email: ${user.email}`}</p>
                      <p>{`Phone: ${user.phone}`}</p>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signin" onClick={() => setShow(false)}>
                  Sign-in
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </>
  );
};

export default Navbar;
