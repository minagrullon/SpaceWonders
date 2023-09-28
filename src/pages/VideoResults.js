import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_SEARCH;

export default function VideoResults() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("earth");

  let videoSrc = "";

  useEffect(() => {
    axios
      .get(`${URL}${search}`)
      .then((res) =>
        setVideos(
          res.data.collection.items.filter(
            (obj) => obj.data[0].media_type === "video"
          )
        )
      )
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div>
      {/* add a search bar for the user to type their searches */}
      Videos from NASA's collection
      {console.log(videos)}
      {videos.length > 0
        ? videos.map((video) => (
            <div>
              <Link to="/videos/:id">
                <h4>{video.data[0].title}</h4>
                <img
                  style={{ height: "400px", width: "400px" }}
                  src={video.links[0].href}
                  alt={video.data[0].title}
                />
              </Link>
            </div>
          ))
        : // <div
          //   style={{ height: "400px", width: "400px", border: "2px solid white" }}
          // >
          //   {console.log(videos[1].links[0].href)}
          //   <img
          //     style={{ height: "400px", width: "400px" }}
          //     src={
          //       videos[1].links[0].href
          //       // "http://images-assets.nasa.gov/video/GSFC_20170515_Sunglints_m12600/GSFC_20170515_Sunglints_m12600~orig.mp4"
          //     }
          //     // type="video/mp4"
          //     alt={""}
          //   />
          // </div>
          null}
    </div>
  );
}
