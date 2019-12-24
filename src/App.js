import React from "react";
import ContextProvider from "./contexts/Context";

import Indicators from "./components/Indicators";
import Forms from "./components/Forms";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <form style={{ width: "600px" }}>
          <Indicators />
          <Forms />
        </form>
      </div>
    </ContextProvider>
  );
}

export default App;
