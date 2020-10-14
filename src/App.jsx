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

      <ButtonAdv
        display={true}
        pill={true}
        label={"Cancel Upload?"}
        labelColor={"#6c757d"}
        shadow={true}
        fontSize={"1.1em"}
        icon={"close"}
        iconColor={"lightCoral"}
        reveal={true}
        click={(event) => this.renderDisgardToast(true)}
      />

      <SLInput
        display={true}
        shrink={false}
        textSize={"2em"}
        prepend={"Title:"}
        clear={true}
        focusOnMount={true}
        inputSubmit={this.handleTitleInput}
      />
    </div>
  );
}

export default App;
