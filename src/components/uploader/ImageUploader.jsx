import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import ButtonAdv from "../global/ButtonAdv";
import SLInput from "../global/SingleLineInput";
import Toast from "../global/Toast";
import DragAndDrop from "./DragAndDrop";
import "../../styles/global/ImageUploader.css";

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      validURL: false,
    };
    this.fileInput = React.createRef();
  }

  handleDropped = (dataTransfer) => {
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
    if (e.length > 0) {
      var url = e;
      this.setState({ url: url });
      if (url.match(/\.(jpeg|jpg|gif|png|svg)|(data:image)/) != null) {
        this.setState({ validURL: true });
        this.convertURL(url);
      } else {
        this.setState({ validURL: false });
        this.errorToast("Invalid URL!", url);
      }
    }
  };

  validateImage(image) {
    var valid = true;
    //type
    var validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(image.type)) {
      this.errorToast("Error", "Invalid file type!");
      valid = false;
    }

    //size
    var maxSizeBytes = 5e6; // 4MB
    if (image.size > maxSizeBytes) {
      this.errorToast(
        "Maximum upload size exceeded! (Max 5MB)",
        "Your image was " + Math.round((image.size / 1e6) * 10) / 10 + " MB"
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
        this.props.returnImage(files[0]);
      }
    } else {
      this.errorToast("Error!", "Only one file may be uploaded!");
    }
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
        timeout={5}
      />
    );
    this.props.renderToast[0](toast);
  };

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

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div id={"uploader"} className="img-uploader-panel bg-white">
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

            <DragAndDrop
              height={"350px"}
              handleDrop={(dropped) => this.handleDropped(dropped)}
            />

            <hr className="IU-separator" />
            <p
              className="lead text-muted mt-3 mb-0 mx-3"
              style={{ display: "inline-block" }}
            >
              Alternatively
            </p>
            <hr className="IU-separator" />

            <div className="alternate-upload mx-0  p-3">
              <div className={"url-input-wrapper mb-2 "}>
                <SLInput
                  display={true}
                  shrink={false}
                  textSize={"1.1em"}
                  placeholder={"Paste an image URL"}
                  clear={true}
                  inputSubmit={this.handleURL}
                />

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

              <input
                ref={this.fileInput}
                accept="image/*"
                type="file"
                hidden={true}
                onChange={(e) => this.handleFile(this.fileInput.current.files)}
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
                click={() => this.fileInput.current.click()}
              />
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default ImageUploader;
