import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { sha256 } from "js-sha256";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/pdf/jnu.pdf")
      .then((res) => setData(res.data));
  }, []);

  const func = async () => {
    const hash = await sha256(data);
    return hash;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={() => func()}>
          Hashing
        </button>
      </header>
    </div>
  );
}

export default App;
