import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import ImageUploader from "./ImageUploader";
import ButtonAdv from "../global/ButtonAdv";
import SLInput from "../global/SingleLineInput";
import MLInput from "../global/MultiLineInput";
import TagHandler from "../global/TagHandler";

import ToggleSwitch from "../global/ToggleSwitch";
import "../../styles/global/Uploader.css";


class Uploader extends Component {
  constructor(props) {
    super(props);
    this.urlToastRef = React.createRef();

    this.state = {
      imageUploader: true,
      imgToggleButton: true,
      disgardToast: false,

      img: [],
      description: "",
      title: "",
      tags: [],
    };
  }

  renderDisgardToast = (event) => {
    if (event) {
      this.props.renderToast("danger", "Disgard Post?", this.state.test, 5);
      this.setState({ test: this.state.test + 1 });
    }
  };

  setImagePreview = (e) => {
    this.setState({ img: [e] }, () => {
      this.setState({ imageUploader: false });
      var previewImg = URL.createObjectURL(
        this.state.img[this.state.img.length - 1]
      );
      var img = document.createElement("img");
      img.src = previewImg;
      img.id = "previewImg";
      document.getElementById("imgViewWrapper").prepend(img);
    });
  };

  handleTitleInput = (event) => {
    this.setState({ title: event });
  };

  handleDescriptionInput = (event) => {
    this.setState({ description: event });
  };

  handleTagsInput = (event) =>{
      this.setState({tags: event});
  }

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div className="uploader-wrapper">
            <div
              className="step1-panel"
              style={{ display: this.state.img.length ? "none" : "block" }}
            >
              <div className="uploader-heading p-2">
                <h1 className="lead title m-0">New Post</h1>
                <small className="lead text-muted">
                  Upload an image to get started.
                </small>
              </div>
              <div style={{ position: "relative" }}>
                <ImageUploader
                  display={this.state.imageUploader}
                  returnImage={(e) => this.setImagePreview(e)}
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
                  click={(event) => this.renderDisgardToast(true)}
                />
              </div>
            </div>

            <div
              className={"step2-panel container-fluid"}
              style={{
                display: this.state.imageUploader ? "none" : "inline-block",
              }}
            >
              <div className="row mb-2">
                <div
                  className="col-12 col-md-8 mb-2"
                  style={{ display: "inline-block" }}
                >
                  <small className="lead text-muted pb-4">
                    Enter your post title below.
                  </small>
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
              </div>

              <div className="row">
                <div className="col-12 col-md-8 mb-4">
                  <div id="imgViewWrapper" className={"imgViewBox"}>
                    <MLInput
                      textSize={"1em"}
                      placeholder={"Add an image description!"}
                      max={100}
                      maxRows={10}
                      inputSubmit={this.handleDescriptionInput}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="post-options">
                    <p className="lead text-muted mb-2">Post Visibility:</p>
                    <ToggleSwitch
                      label={"Visible to: "}
                      maxWidth={"800px"}
                      default={true}
                      lable0={"Only me"}
                      label1={"Community"}
                    />
                    <p className="lead text-muted mt-3 mb-0">Add Tags:</p>
                    <div>
                      <TagHandler maxTags={5} inputSubmit={this.handleTagsInput}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Uploader;
