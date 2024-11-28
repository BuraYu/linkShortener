import "./App.css";
import LinkShortener from "./components/LinkShortener";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Link Shortener</h1>
        <LinkShortener />
      </div>
    </div>
  );
}

export default App;
