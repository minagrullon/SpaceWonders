import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Account from "./components/account/Account";
import ImageOfDay from "./components/imageOfTheDay/ImageOfDay";
import SingleVid from "./components/singleVid/SingleVid";

//Pages
import Home from "./pages/Home";
import VideoResults from "./pages/VideoResults";
import ImageView from "./pages/ImageView";

export default function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/imageOfTheDay" element={<ImageView />} />
        <Route path="/videos" element={<VideoResults />} />
        <Route path="/videos/:id" element={<SingleVid />} />
      </Routes>
    </div>
  );
}
