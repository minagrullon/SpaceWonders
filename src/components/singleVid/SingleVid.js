import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SingleVid({ video, json }) {
  const [videoMp4, setVideoMp4] = useState("");

  useEffect(() => {
    axios
      .get(json)
      .then((res) => {
        console.log(res, "res");

        setVideoMp4(res.data.find((href) => href.includes("orig.mp4")));
      })
      .catch((err) => console.log(err));
  }, [json]);

  return (
    <div>
      {console.log(videoMp4)}
      <h4>{video.data[0].title}</h4>
      <img
        style={{ height: "400px", width: "400px" }}
        src={video.links[0].href}
        alt={video.data[0].title}
      />
    </div>
  );
}
