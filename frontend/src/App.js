import "./App.css";
import News from "./components/News";
import Forecast from "./components/Forecast";

//trefle access token: sSNigBYy-UzGRdplKQaR3Ah_BeiL48RmIs0BC9KvlI0

function App() {
  return (
    <div className="App">
      <Forecast />
      <News />
    </div>
  );
}

export default App;
