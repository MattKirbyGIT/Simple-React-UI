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

  renderToast = (type, title, small, timeout, reject, accept) => {
    var newToast = (
    
      <Toast
        key={this.state.toasts.length}
        display={true}
        text={title}
        type={type}
        smallText={small}
        timeout={timeout}
        reject={reject}
        accept={accept}
      />
    
    );
    this.setState({ toasts: [...this.state.toasts, newToast] });
  };

  render() {
    return (
      <div className="App bg-white">
      

        <Uploader
          display={this.state.uploader}
          toggle={this.renderUploader}
          renderToast={(type, title, small, timeout, reject, accept) =>
            this.renderToast(type, title, small, timeout, reject, accept)
          }
        />


        {this.state.toasts}

        

        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
