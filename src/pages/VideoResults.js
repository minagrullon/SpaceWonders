import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleVid from "../components/singleVid/SingleVid";

const URL = process.env.REACT_APP_SEARCH;

export default function VideoResults() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("earth");

  useEffect(() => {
    axios
      .get(`https://images-api.nasa.gov/search?media_type=video`)
      // .get(`${URL}${search}`)
      .then((res) => setVideos(res.data.collection.items))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div>
      <h2 className="videoPageTitle">Videos from NASA's collection</h2>
      <div className="videoResults">
        {/* add a search bar for the user to type their searches */}
        {console.log(videos)}
        {videos.length > 0
          ? videos.map((video, indx) => (
              <div key={indx} className="videoResults__div">
                {/* <Link to={`/videos/${indx}`}> */}
                <SingleVid video={video} json={video.href} />
                {console.log(video.href)}
                {/* </Link> */}
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
