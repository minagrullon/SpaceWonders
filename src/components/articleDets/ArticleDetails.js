import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ArticleDetails.scss";

export default function ArticleDetails({ article }) {
  const [isGlowing, setIsGlowing] = useState(false);

  const createGlow = () => {
    setIsGlowing(true);
  };

  const endGlow = () => {
    setIsGlowing(false);
  };

  //? some of the articles do not contain images. you will need to have a default image if thats the case

  return (
    <Link className="articleLink" target="_blank" to={article.url}>
      <div
        className={isGlowing ? "articleContainer glowing" : "articleContainer"}
        onMouseEnter={createGlow}
        onMouseLeave={endGlow}
      >
        <h2 className="articleContainer__title">{article.title}</h2>
        <img
          className="articleContainer__image"
          src={article.urlToImage}
          alt={article.title}
          style={{ height: "400px" }}
        />
      </div>
    </Link>
  );
}
