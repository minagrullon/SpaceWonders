import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ReactPlayer from "react-player";

import "./ImageOfDay.scss";

const URL = process.env.REACT_APP_URL;

export default function ImageOfDay() {
  const navigate = useNavigate();
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setImageData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="imageOfDay_main-title">
        <h2 className="imageOfDay_main-title">Image Of the Day </h2>
      </div>
      {console.log(imageData)}
      <div className="imageOfDayContainer">
        <div className="imageOfDayContainer__image">
          {imageData.media_type === "image" ? (
            <img src={imageData.url} alt={`${imageData.title}`} />
          ) : (
            <ReactPlayer
              url={imageData.url}
              height="80%"
              width="80%"
              controls={true}
            />
          )}
        </div>
        <div className="imageOfDayContainer__description">
          <h3 className="imageOfDayContainer__image-title">
            {imageData.title}
          </h3>
          <p>{imageData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
