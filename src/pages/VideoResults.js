import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleVid from "../components/singleVid/SingleVid";

const URL = process.env.REACT_APP_SEARCH;

export default function VideoResults() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("earth");

  let videoSrc = "";

  useEffect(() => {
    axios
      .get(`https://images-api.nasa.gov/search?media_type=video`)
      // .get(`${URL}${search}`)
      .then((res) =>
        setVideos(
          res.data.collection.items
          // res.data.collection.items.filter(
          //   (obj) => obj.data[0].media_type === "video"
          // )
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
        ? videos.map((video, indx) => (
            <div key={indx}>
              <Link to={`/videos/${indx}`}>
                <SingleVid video={video} json={video.href} />
                {console.log(video.href)}
              </Link>
            </div>
          ))
        : null}
    </div>
  );
}
