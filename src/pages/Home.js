import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticleDetails from "../components/articleDets/ArticleDetails";

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
      <h1 className="homePage__title" style={{ color: "white" }}>
        Discover the lastest Space News!
      </h1>
      {console.log(articles)}
      <div className="homePage__articles">
        {articles.map((article) => {
          return <ArticleDetails article={article} />;
          //! it would be better to have these be clickable links that redirects to the details component.
        })}
      </div>
    </div>
  );
}
