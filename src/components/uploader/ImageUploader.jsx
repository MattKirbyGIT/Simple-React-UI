import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import ButtonAdv from "../global/ButtonAdv";
import SLInput from "../global/SingleLineInput";
import Toast from "../global/Toast";
import "../../styles/global/ImageUploader.css";

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://picsum.photos/300/200?blur=2",
      dropZoneEffect: "",
      dragOver: false,
      inputFocus: false,
      url: "",
      validURL: false,
      toast: false,
      toastMessage: "",
    };
    this.fileInput = React.createRef();
  }

  handleFocus = () => {
    this.setState({ inputFocus: !this.state.inputFocus });
  };

  handleFileDrag = (event, dragOver) => {
    event.preventDefault();
    if (dragOver) {
      this.setState({ dropZoneEffect: "dropZoneEffect" });
    } else if (!dragOver) {
      this.setState({ dropZoneEffect: "" });
    }
  };

  toggleDragOver = (e) => {
    this.setState({ dragOver: e });
  };

  handleFileDrop = (event) => {
    event.preventDefault();
    var dataTransfer = event.dataTransfer;
    var files = dataTransfer.files;

    if (files.length) {
      this.handleFile(files);
    } else {
      var html = dataTransfer.getData("text/html");
      var match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html);
      var url = match && match[1];

      if (url) {
        this.convertURL(url);
      }
    }
  };

  handleURL = (e) => {
    var url = e;
    var corsBypass = "https://cors-anywhere.herokuapp.com/";

    this.setState({ url: url });
    if (url.match(/\.(jpeg|jpg|gif|png|svg)|(data:image)/) != null) {
      this.setState({ validURL: true });
      this.convertURL(url);
    } else {
      this.setState({ validURL: false });
      //this.props.renderToast("danger", "Invalid URL!", url, 5);
      this.errorToast("Invalid URL!",url )
    }
  };

  validateImage(image) {
    var valid = true;
    //type
    var validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(image.type)) {
      //this.props.renderToast("danger", "Invalid file type!", null, 5);
      this.errorToast("Error", "Invalid file type!")
      valid = false;
    }

    //size
    var maxSizeBytes = 4e6; // 4MB
    if (image.size > maxSizeBytes) {
      // this.props.renderToast(
      //   "danger",
      //   "Maximum upload size exceeded! (Your image was " +
      //     Math.round((image.size / 1e6) * 10) / 10 +
      //     " MB)",
      //   null,
      //   5
      // );

      this.errorToast(
        "Error",
        "Maximum upload size exceeded! (Your image was " +
          Math.round((image.size / 1e6) * 10) / 10 +
          " MB)"
      );
      valid = false;
    }

    return valid;
  }

  convertURL(url) {
    var img = new Image();
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");

    img.onload = () => {
      c.width = img.naturalWidth; // update canvas size to match image
      c.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0); // draw in image
      c.toBlob((blob) => {
        // get content as PNG blob
        this.handleFile([blob]);
      }, "image/png");
    };
    img.onerror = () => {
      //alert("Error in uploading");
      this.setState({ validURL: false });
    };

    img.crossOrigin = ""; // if from different origin
    img.src = url;
  }

  handleFile = (files) => {
    if (files.length < 2 && files.length > 0) {
      if (this.validateImage(files[0])) {
        console.log(files[0]);
        this.props.returnImage(files[0]);
      }
    } else {
      this.errorToast("Error", "Only one file may be uploaded!");
      //this.props.toggleToast(true, "Only one file may be uploaded!");
    }
  };

  clearURL = () => {
    this.setState({ url: "" });
  };

  handleFileInput = () => {
    this.fileInput.current.click();
  };

  handleClipboardPaste = () => {
    navigator.clipboard.readText().then((text) => {
      this.handleURL(text);
    });
  };

  errorToast = (main, sub) => {
    var toast = (
      <Toast
        key={this.props.renderToast[1]}
        text={main}
        type={"danger"}
        smallText={sub}
        timeout={false}
      />
    );
    this.props.renderToast[0](toast);
  };

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div id={"uploader"} className="img-uploader-panel bg-white">
            <div
              className={"dropzone bg-dark "}
              onDragOver={() => this.toggleDragOver(true)}
              onDragLeave={() => this.toggleDragOver(false)}
              onDrop={this.handleFileDrop}
              style={{
                backgroundImage: "url(" + this.state.imgSrc + ")",
                opacity: 1,
                backgroundColor: "black",
              }}
            >
              <div
                className="drop-center"
                style={{
                  width: this.state.dragOver ? "95%" : "65%",
                  height: this.state.dragOver ? "95%" : "30%",
                  fontSize: this.state.dragOver ? "3em" : "1.2em",
                  borderRadius: this.state.dragOver ? "10px" : "50px",
                  transition: "all 200ms",
                }}
              >
                <p className="mb-0 mx-5">
                  {this.state.dragOver
                    ? "Drop!"
                    : "Drag and drop your image here"}
                </p>
              </div>
            </div>

            <hr
              className="separator"
              style={{
                width: "15%",
                display: "inline-block",
                clear: "none",
                position: "relative",
                top: "0.7em",
              }}
            />
            <p
              className="lead text-muted mt-3 mb-0 mx-3"
              style={{ display: "inline-block" }}
            >
              Alternatively
            </p>
            <hr
              className="separator"
              style={{
                width: "15%",
                display: "inline-block",
                clear: "none",
                position: "relative",
                top: "0.7em",
              }}
            />

            <div className="alternate-upload mx-0  p-3">
              <div className={"url-input-wrapper mb-2 "}>
                <div className={"url-input-field"}>
                  <SLInput
                    display={true}
                    shrink={false}
                    textSize={"1.1em"}
                    placeholder={"Paste an image URL"}
                    clear={true}
                    inputSubmit={this.handleURL}
                  />
                </div>
                <div className="ml-2">
                  <ButtonAdv
                    display={true}
                    pill={true}
                    labelColor={"#6c757d"}
                    fontSize={"1.1em"}
                    icon={"clipboard"}
                    iconColor={"#6c757d"}
                    reveal={true}
                    click={this.handleClipboardPaste}
                  />
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <input
                  ref={this.fileInput}
                  accept="image/*"
                  type="file"
                  className="form-control-file"
                  id="fileInput"
                  hidden={true}
                  onChange={(e) =>
                    this.handleFile(this.fileInput.current.files)
                  }
                />
                <ButtonAdv
                  display={true}
                  width={"100%"}
                  pill={true}
                  label={"Choose photo"}
                  labelColor={"#6c757d"}
                  fontSize={"1.1em"}
                  icon={"photo"}
                  iconColor={"#6c757d"}
                  click={this.handleFileInput}
                />
              </div>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default ImageUploader;
