import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Signin from "./pages/Signin";
import Subscription from "./pages/Subscription.js";
import About from "./pages/About";
import Register from "./pages/Register";
import { useContext, useEffect } from "react";
import { Context } from "./index.js";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Livescore from "./pages/Live Score/Livescore.js";

function App() {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/auth/getuser",
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsAuthorized(true);
        setUser(response.data.user);
      } else {
        setIsAuthorized(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      setIsAuthorized(false);
      console.error("Error fetching user:", error.response);
      toast.error(error.response?.data?.message || "Failed to fetch user");
    }
  };

  useEffect(() => {
    if (
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/signin"
    ) {
      fetchUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthorized ? <Home /> : <Navigate to="/signin" replace />}
        />
        <Route path="/News" element={<News />} />
        <Route path="/Livescore" element={<Livescore />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/About/Cricket/Info"
          element={<About title="CricketInfo" />}
        />
        <Route
          path="/About/Football/Info"
          element={<About title="FootballInfo" />}
        />
        <Route
          path="/About/Hockey/Info"
          element={<About title="HockeyInfo" />}
        />
        <Route
          path="/About/Olympics/Info"
          element={<About title="OlympicsInfo" />}
        />
        <Route
          path="/About/Baseball/Info"
          element={<About title="BaseballInfo" />}
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
