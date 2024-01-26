import RouteComponent from "./RouteComponent";
import NavBar from "./components/navbar/Navbar";
import "./App.scss";
import backgroundVid from "./Assets/Background Stars Space.mp4";

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="background"
        src={backgroundVid}
      ></video>
      <NavBar />
      <RouteComponent />
    </div>
  );
}

export default App;
