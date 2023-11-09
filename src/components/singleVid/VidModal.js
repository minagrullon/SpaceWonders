import React from "react";
import ReactPlayer from "react-player";
import "./VidModal.scss";

export default function VidModal({ videoMp4, video, showModal }) {
  return (
    <div className="videoModal">
      <h1 className="singleVideo__title">{video.data[0].title}</h1>
      <div className="videoModal__important">
        <ReactPlayer url={videoMp4} height="80%" width="80%" controls={true} />
        <div>
          <h3>Description:</h3>
          <p>
            {video.data[0].description
              ? video.data[0].description
              : "No description for this video is provided"}
          </p>
        </div>
      </div>
    </div>
  );
}
