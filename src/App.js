import "./App.css";
import { Hero } from "./components/Hero";
import { InputLink } from "./components/InputLink";
import { Navbar } from "./components/Navbar";
import LinkShortener from "./deprecated /LinkShortener";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Hero />
        <InputLink />
      </div>
    </div>
  );
}

export default App;
