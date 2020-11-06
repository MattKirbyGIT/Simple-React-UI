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

  renderDisgardToast = () => {
    var toast = (
      <Toast
        key={this.props.renderToast[1]}
        text={"Disgard Post?"}
        type={"danger"}
        smallText={"Your post will not be saved"}
        cancel={true}
        timeout={20}
        accept={() => this.props.toggle()}
      />
    );
    this.props.renderToast[0](toast);
  };

  handleImageInput = (e) => {
    console.log(e)
    this.setState({ imgBlob: e, imageUploader: false, postConfig: true }, () => {});
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
              style={{ display: !this.state.imageUploader ? "none" : "block" }}
            >
              
                <h1 className="lead title mb-0">New Post</h1>
                <p className="lead text-muted mb-1">
                  Upload an image to get started.
                </p>
            
              <div style={{ position: "relative" }}>
                <ImageUploader
                  display={this.state.imageUploader}
                  returnImage={(e) => this.handleImageInput(e)}
                  renderToast={this.props.renderToast}
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
                  topRight={true}
                  click={this.renderDisgardToast}
                />
              </div>
            </div>
            <PostConfig
              display={this.state.postConfig}
              img={this.state.imgBlob}
              title={this.handleTitleInput}
              description={this.handleDescriptionInput}
              tags={this.handleTagsInput}
            />
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Uploader;
