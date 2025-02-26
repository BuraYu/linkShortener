import "./App.css";
import { Hero } from "./components/Hero";
import { InputLink } from "./components/InputLink";
import { Navbar } from "./components/Navbar";
import LinkShortener from "./deprecated /LinkShortener";
import underConstruction from "./assets/under_construction.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img
          src={underConstruction}
          alt="Under construction"
          style={{
            position: "fixed",
            bottom: "10%",
            right: "10%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
            transform: "rotate(400deg)",
          }}
        />
        <Navbar />
        <Hero />
        <InputLink />
      </div>
    </div>
  );
}

export default App;
