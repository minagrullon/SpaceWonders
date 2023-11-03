import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SingleVid.scss";

export default function SingleVid({ video, json }) {
  const [videoMp4, setVideoMp4] = useState("");

  useEffect(() => {
    axios
      .get(json)
      .then((res) => {
        setVideoMp4(res.data.find((href) => href.includes("orig.mp4")));
      })
      .catch((err) => console.log(err));
  }, [json]);

  return (
    <div className="singleVideo">
      {/* {console.log(videoMp4)} */}
      <h4 className="singleVideo__title">{video.data[0].title}</h4>
      <iframe
        className="singleVideo__video"
        // style={{ height: "400px", width: "400px" }}
        src={video.links[0].href}
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        alt={video.data[0].title}
        title={video.data[0].title}
      ></iframe>
    </div>
  );
}
