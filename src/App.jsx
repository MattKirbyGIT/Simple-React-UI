import React, { Component } from "react";
import ToastHandler from "./components/global/ToastHandler";
import Uploader from "./components/uploader/Uploader";
import Toast from "./components/global/Toast";

import "../src/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      uploader: true,
      toasts: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  renderUploader = () => {
    this.setState({ uploader: !this.state.uploader });
  };

  renderToast = (newToast) => {
    this.setState({ toasts: [newToast, ...this.state.toasts] });
  };

  render() {
    return (
      <div className="App bg-white">
        <div style={{ position: "absolute", zIndex: 1 }}>
          {this.state.toasts.slice(0, 1)}
        </div>

        <Uploader
          display={this.state.uploader}
          toggle={this.renderUploader}
          renderToast={[
            (toast) => this.renderToast(toast),
            this.state.toasts.length,
          ]}
        />



        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
