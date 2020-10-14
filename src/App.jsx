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
      toast: undefined,
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

  renderToast = (type, title, small, timeout) => {
    var newToast = (
      <Toast
        key={small}
        display={true}
        text={title}
        type={type}
        smallText={small}
        timeout={timeout}
      />
    );
    this.setState({ toast: newToast });
  };

  render() {
    return (
      <div className="App bg-white">
        <div>
          <h1 className={"lead title"}>
            An example image upload app using reusable React components
          </h1>
        </div>

        <Uploader
          display={this.state.uploader}
          toggle={this.renderUploader}
          renderToast={(type, title, small, timeout) =>
            this.renderToast(type, title, small, timeout)
          }
        />

        <ToastHandler toast={this.state.toast} />

        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
