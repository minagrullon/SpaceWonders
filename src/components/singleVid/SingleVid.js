import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VidModal from "./VidModal";
import "./SingleVid.scss";

export default function SingleVid({ video, json }) {
  const [showModal, setShowModal] = useState(false);
  const [videoMp4, setVideoMp4] = useState("");

  const shortenedTitle =
    video.data[0].title.length > 60
      ? video.data[0].title.substring(0, 70) + "..."
      : video.data[0].title;

  useEffect(() => {
    axios
      .get(json)
      .then((res) => {
        setVideoMp4(res.data.find((href) => href.includes("orig.mp4")));
      })
      .catch((err) => console.log(err));
  }, [json]);

  return (
    <div className="singleVideo" onClick={() => setShowModal(!showModal)}>
      {console.log(video)}

      {setVideoMp4 ? (
        <>
          <img
            className="singleVideo__img"
            src={video.links[0].href}
            alt={video.links[0].href}
          />
          <h4 className="singleVideo__title">{shortenedTitle}</h4>
        </>
      ) : (
        <p>Loading....</p>
      )}

      {showModal ? (
        <VidModal video={video} videoMp4={videoMp4} showModal={showModal} />
      ) : null}
    </div>
  );
}
