import React from "react";
//Added Later
import "./Freature.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Freature = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const features = [
    {
      idname: "content-card-1",
      name: "Cricket",
      animation: "zoom-in-right",
      href: "/About/Cricket/Info",
    },
    {
      idname: "content-card-2",
      name: "Football",
      animation: "zoom-in-left",
      href: "/About/Football/Info",
    },
    {
      idname: "content-card-3",
      name: "Hockey",
      animation: "zoom-in-right",
      href: "/About/Hockey/Info",
    },
    {
      idname: "content-card-4",
      name: "Olympics",
      animation: "zoom-in-left",
      href: "/About/Olympics/Info",
    },
    {
      idname: "content-card-5",
      name: "Baseball",
      animation: "zoom-in-right",
      href: "/About/Baseball/Info",
    },
    {
      idname: "content-card-6",
      name: "Other Sports",
      animation: "zoom-in-left",
      href: "https://en.wikipedia.org/wiki/Sport",
    },
  ];
  return (
    <div className="home-content">
      {features.map((item) => (
        <div className="content-card p-2" data-aos={item.animation}>
          <Link title={item.name} to={item.href}>
            <div id={item.idname} className="card-bgimg">
              <div className="shade d-flex justify-content-center align-items-center">
                <h1 style={{ color: "white" }}>{item.name}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
      ;
    </div>
  );
};

export default Freature;
