import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import moon from "../../Assets/la-luna.png";
import earth from "../../Assets/lovely-earth.jpeg";
import "./Login.scss";

export default function Login() {
  const [error, setError] = useState(false);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     userLogin(user);
  //   };

  const handleTextChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.id]: e.target.value });
  };

  return (
    <div className="loginForm">
      <h2 className="loginForm__welcome">The Galaxy awaits!</h2>
      <h1 className="loginForm__welcome"> Explore with SPACE WONDERS</h1>
      {/* Moon Animation */}
      <div className="loginForm__earth-moon">
        <img className="loginForm__earth" src={earth} alt="earth" />
        <div>
          <img className="loginForm__moon" src={moon} alt="moon" />
        </div>
      </div>

      <h3 className="loginForm__title"></h3>
      <form className="loginForm__form">
        {/* onSubmit={handleLogin} */}
        <label>
          Username:
          <input
            type="text"
            id="username"
            value={userLogin.username}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={userLogin.password}
            onChange={handleTextChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <div className="signup__question">
        <p>New? Sign up!</p>
        <Link to="/signup">
          <button className="signup__button">Sign up</button>
        </Link>
        <Link to="/">
          <button className="bypass__login">Explore without account</button>
        </Link>
      </div>
    </div>
  );
}
