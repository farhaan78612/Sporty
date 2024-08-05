import React, { useContext } from "react";
//Added Later
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../index.js";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { name, email, phone, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setEmail("");
      setName("");
      setPassword("");
      setPhone("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div id="Signin-page" className="container-fluid">
        <div className="warpper">
          <form>
            <h1>Register</h1>
            <div className="input-box">
              Enter Name:
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-box">
              Enter Email ID:
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-box">
              Enter Phone No:
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-box">
              Enter Password:
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" onClick={handleRegister}>
              {" "}
              Register{" "}
            </button>
            <div id="register-singnup">
              <span>Already registered ? &nbsp;</span>
              <Link to={"/signin"}>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
