import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container p-2">
      <h1> Weather app </h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/kodzu-ann/react-homework-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github link{" "}
        </a>
      </footer>
    </div>
  );
}
