import React from "react";
import Search from "../components/searchBar/Search";
import ImageOfDay from "../components/imageOfTheDay/ImageOfDay";
import FeaturedVideos from "../components/featuredVideos/FeaturedVideos";

export default function Home() {
  const hideDescription = document.body.querySelector(
    ".imageOfDayContainer__description"
  );
  //hide view of description when on the home page

  return (
    <div className="homePage">
      <h2 style={{ color: "white" }}>Explore with Space Wonders</h2>
      <div className="homePage__searchBar">
        <Search />
      </div>
      <div className="homePage__featured">
        <FeaturedVideos />
      </div>
    </div>
  );
}
