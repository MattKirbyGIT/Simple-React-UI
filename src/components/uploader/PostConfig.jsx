import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import SLInput from "../global/SingleLineInput";
import MLInput from "../global/MultiLineInput";
import TagHandler from "../global/TagHandler";
import ToggleSwitch from "../global/ToggleSwitch";

class PostConfig extends Component {
  constructor(props) {
    super();
    this.state = {
      previewBlob: "",
    };
    this.previewRef = React.createRef();
  }

  handleImgPreview() {
    console.log(this.props.img);
    var previewImg = URL.createObjectURL(this.props.img);
    var img = document.createElement("img");
    img.src = previewImg;
    img.id = "previewImg";
    this.previewRef.current.prepend(img);
  }

  componentDidUpdate() {
    if (this.state.previewBlob !== this.props.img) {
      this.setState({ previewBlob: this.props.img });
      this.handleImgPreview();
    }
  }

  render() {
    return (
      <Fade appear={false} in={this.props.display} unmountOnExit={true}>
        <div
          className={"step2-panel"}
          style={{
            display: this.state.imageUploader ? "none" : "inline-block",
          }}
        >
          <div className="row mb-2">
            <div
              className="col-12 col-md-8 mb-2"
              style={{ display: "inline-block" }}
            >
          
              <SLInput
                display={true}
                shrink={false}
                textSize={"2em"}
                prepend={"Title:"}
                clear={true}
                focusOnMount={true}
                inputSubmit={this.props.title}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 mb-4">
              <div ref={this.previewRef} className={"imgViewBox"}>
                <MLInput
                  textSize={"1em"}
                  placeholder={"Add an image description!"}
                  max={100}
                  maxRows={10}
                  inputSubmit={this.props.description}
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
                  <TagHandler maxTags={5} inputSubmit={this.props.tags} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default PostConfig;
