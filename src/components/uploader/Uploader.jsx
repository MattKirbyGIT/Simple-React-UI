import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import ImageUploader from "./ImageUploader";
import PostConfig from "./PostConfig";
import ButtonAdv from "../global/ButtonAdv";

import Toast from "../global/Toast";

import "../../styles/global/Uploader.css";

class Uploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUploader: true,
      postConfig: false,

      imgBlob: "",
      description: "",
      title: "",
      tags: [],
    };
  }

  

  handleImageInput = (e) => {
    this.setState(
      { imgBlob: e, imageUploader: false, postConfig: true },
      () => {}
    );
  };

  handleTitleInput = (event) => {
    this.setState({ title: event });
  };

  handleDescriptionInput = (event) => {
    this.setState({ description: event });
  };

  handleTagsInput = (event) => {
    this.setState({ tags: event });
  };

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div className="uploader-wrapper">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "95%",
                maxWidth: this.state.imageUploader ? "450px" : "1000px",
              }}
            >
              <h1 className="lead title mb-0">{'New Post'}</h1>
              <p className="lead text-muted mb-1">
              {this.state.imageUploader ? 'Upload an image to get started.' : 'Enter a title below.'}
              </p>

              <ImageUploader
                display={this.state.imageUploader}
                returnImage={(e) => this.handleImageInput(e)}
                renderToast={this.props.renderToast}
              />
         

              <PostConfig
                display={this.state.postConfig}
                img={this.state.imgBlob}
                title={this.handleTitleInput}
                description={this.handleDescriptionInput}
                tags={this.handleTagsInput}
              />
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Uploader;
