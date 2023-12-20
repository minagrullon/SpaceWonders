import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_NEWS;

export default function Home() {
  const hideDescription = document.body.querySelector(
    ".imageOfDayContainer__description"
  );
  //hide view of description when on the home page
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homePage">
      <h2 style={{ color: "white" }}>Explore with Space Wonders</h2>
      {console.log(articles)}
      <div className="homePage__articles">
        {articles.map((el) => {
          return <li>{el.title}</li>;
        })}
      </div>
    </div>
  );
}
