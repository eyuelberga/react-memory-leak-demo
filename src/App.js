import { useState } from "react";
import Home from "./HomeNoLeak";
import About from "./About";

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <div>
      <header>
        <button
          onClick={() => {
            setIsHome(!isHome);
          }}
        >
          {isHome ? "About Page" : "Home Page"}
        </button>
      </header>
      {isHome ? <Home /> : <About />}
    </div>
  );
}

export default App;
