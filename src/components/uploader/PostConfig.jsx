import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import SLInput from "../global/SingleLineInput";
import MLInput from "../global/MultiLineInput";
import TagHandler from "../global/TagHandler";
import ToggleSwitch from "../global/ToggleSwitch";
import ButtonAdv from "../global/ButtonAdv";

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
          <div className="row  mb-2">
            <div className="col-12 col-md-8 mb-2">
              <SLInput
                display={true}
                shrink={false}
                textSize={"2em"}
                prepend={"Post Title:"}
                clear={true}
                focusOnMount={true}
                inputSubmit={this.props.title}
              />
            </div>
            <div
              className={"col-12 col-md-4 mb-2"}
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            ></div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 mb-2">
              <div ref={this.previewRef} className={"imgViewBox mb-3"}></div>
              <MLInput
                textSize={"1em"}
                placeholder={"Add an image description!"}
                max={100}
                maxRows={10}
                inputSubmit={this.props.description}
              />
            </div>
            <div className="col-12 col-md-4" >
            
              <div className="post-options" style={{width: "100%"}}>
                <p className="lead text-muted my-1">Post Visibility:</p>
                <ToggleSwitch
                  label={"Visible to: "}
                  maxWidth={"100%"}
                  default={true}
                  lable0={"Only me"}
                  label1={"Community"}
                />
                <p className="lead text-muted mt-2 mb-0">Add Tags:</p>
                <TagHandler maxTags={5} inputSubmit={this.props.tags} />
              </div>
              <div className={'my-3'}style={{display: "flex", justifyContent: "space-between", width: '100%'}}> 
                <ButtonAdv
                width={"90%"}
                pill={true}
                reverse={true}
                  display={true}
                  icon={'close'}
                  shadow={true}
                  iconColor={"lightcoral"}
                  label={"Discard"}
                  labelColor={"#6c757d"}
                  fontSize={"1.3em"}
                  click={this.props.discard}
                />
                <ButtonAdv
                width={"90%"}
                  display={true}
                  pill={true}
                  shadow={true}
                  label={"Submit"}
                  labelColor={"#6c757d"}
                  fontSize={"1.3em"}
                  
                  click={(event) => this.handleToggle()}
                />
              </div>
              
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default PostConfig;
