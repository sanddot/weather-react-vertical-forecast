import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
      </div>
      <footer>
        <div>
          This project was coded by{" "}
          <a href="https://github.com/sanddot">Sandra Domeikiene</a>, is{" "}
          <a href="https://github.com/sanddot/weather-react-vertical-forecast">
            open sourced on GitHub{" "}
          </a>
          and{" "}
          <a href="https://candid-caramel-73ba91.netlify.app/">
            hosted on Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
