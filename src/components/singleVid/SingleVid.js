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
      {/* {console.log(videoMp4)} */}
      {setVideoMp4 ? (
        <>
          <h4 className="singleVideo__title">{video.data[0].title}</h4>

          {/* <ReactPlayer
              url={videoMp4}
              height="100%"
              width="100%"
              controls={true}
            /> */}

          <img src={video.links[0].href} alt={video.links[0].href} />
        </>
      ) : (
        "Loading...."
      )}

      {showModal ? (
        <VidModal video={video} videoMp4={videoMp4} showModal={showModal} />
      ) : null}
    </div>
  );
}
