import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
        {/* <h2 className="imageOfDay_main-title"> Of </h2>
        <h2 className="imageOfDay_main-title">The</h2>
        <h2 className="imageOfDay_main-title">Day</h2> */}
      </div>
      {console.log(imageData)}
      <div className="imageOfDayContainer">
        <div className="imageOfDayContainer__image">
          <img src={imageData.url} alt={`${imageData.title}`} />
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
