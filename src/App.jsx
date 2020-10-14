import React from "react";
import Icon from "./components/global/Icon";
import ButtonAdv from "./components/global/ButtonAdv";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Icon
        size={"2em"}
        display={true}
        icon={"close"}
        iconColor={"lightcoral"}
      />
    </div>
  );
}

export default App;
