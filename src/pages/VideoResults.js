import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_SEARCH;

export default function VideoResults() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("earth");

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
  }, [search]);
  return (
    <div>
      {/* add a search bar for the user to type their searches */}
      VideoResults
      {console.log(videos)}
      <video
        style={{ height: "400px", width: "400px", border: "2px solid white" }}
      >
        <source
          // style={{ height: "400px", width: "400px" }}
          src={
            "http://images-assets.nasa.gov/video/GSFC_20170515_Sunglints_m12600/GSFC_20170515_Sunglints_m12600~orig.mp4"
          }
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
