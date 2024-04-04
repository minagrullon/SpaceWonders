import RouteComponent from "./RouteComponent";
import NavBar from "./components/navbar/Navbar";
import "./App.scss";
import backgroundVid from "./Assets/BackgroundStarsSpace.mp4";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="background"
          src={backgroundVid}
        ></video>
      </div>
      <NavBar />
      <RouteComponent />
    </div>
  );
}

export default App;
