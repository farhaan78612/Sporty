import React, { useContext } from "react";
//Added Later
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Signin.css";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Context } from "../index.js";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data && response.data.user) {
        toast.success("Login Successful");
        setIsAuthorized(true);
        setUser(response.data.user);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Login Failed");
      } else {
        toast.error("Login Failed");
      }
      console.error("Login failed:", error);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div id="Signin-page" className="container-fluid">
        <div className="warpper">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="Remember-forgot">
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember Me
              </label>
            </div>
            <button type="submit" onClick={handleLogin}>
              {" "}
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account?<Link to={"/Register"}>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
