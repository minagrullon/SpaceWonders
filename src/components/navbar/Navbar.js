import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import pic from "../../Assets/spacewonders.png";
import backpic from "../../Assets/bigCedic.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar__main_logo" src={pic} alt="space-logo" />
      </Link>
      <div className="navbar__main">
        <li className="navbar__main_li">
          <Link to="/imageOfTheDay">Image Of the Day</Link>
        </li>
        <li className="navbar__main_li">
          <Link to="/videos">Videos</Link>
        </li>
        <li className="navbar__main_li">
          <Link to="/learn">Learn</Link>
        </li>
        {/* <li className="navbar__main_li">
          <Link to="/play">Play</Link>
        </li> */}
        {/* <button className="navbar__button">Log out</button> */}
      </div>
    </nav>
  );
}
