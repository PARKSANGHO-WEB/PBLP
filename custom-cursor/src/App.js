import "./App.css";
import DotRing from "./components/DotRing/DotRing";

function App() {
  return (
    <div className="App">
      <DotRing />
      <div className="container"></div>
      <div className="container" style={{background: "red"}}></div>
    </div>
  );
}

export default App;