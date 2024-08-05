import React, { useEffect, useState } from "react";
import { getNews } from "./NewsAPI.js";
import "./News.css";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer.js";

const News = () => {
  const [mynews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then((res) => {
        setMyNews(res.articles);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className={!loading ? "News" : "loading"}>
        <div id="news-header">
          <h1 id="News-heading">Enjoy Daily Top Sports - Headlines</h1>
        </div>
        {!loading ? (
          <div className="mainDiv">
            {mynews.map((ele) => {
              console.log(ele);
              return (
                <div class="card bg-transparent glass-effect neon-border">
                  <div className="card-header">
                    <img
                      src={
                        ele.urlToImage == null
                          ? "./image/news.jpg"
                          : ele.urlToImage
                      }
                      class="card-img-top"
                      alt="News Image"
                    />
                  </div>
                  <div class="card-body" id="news-content">
                    <h5 class="card-title">{ele.author}</h5>
                    <p class="card-text">{ele.title}</p>
                    <h6 className="card-text">
                      {new Date(ele.publishedAt).toLocaleString()}
                    </h6>
                  </div>
                  <div className="card-footer">
                    <a href={ele.url} target="_blank" class="btn btn-primary">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>{<img src="./image/loading.gif" alt="Loading" />}</>
        )}
      </div>
      <Footer />
    </>
  );
};

export default News;
