import React from "react";
import ReactPlayer from "react-player";

export default function VidModal({ videoMp4, video, showModal }) {
  return (
    <div>
      <h4 className="singleVideo__title">{video.data[0].title}</h4>
      <ReactPlayer url={videoMp4} height="100%" width="100%" controls={true} />
      <p>{video.data[0].description}</p>
    </div>
  );
}
