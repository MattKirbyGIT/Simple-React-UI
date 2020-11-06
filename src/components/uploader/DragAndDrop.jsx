import React, { Component } from "react";
import "../../styles/global/DragAndDrop.css";

class DragAndDrop extends Component {
  state = {
    img: this.props.placeholderImg
      ? this.props.placeholderImg
      : "https://picsum.photos/300/200?blur=2",
    drag: false,
  };

  handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrag = (e, drag) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: drag });
  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    this.props.handleDrop(e.dataTransfer);
  };

  render() {
    return (
      <div
        className="DND-Dropzone bg-dark"
        onDragEnter={(e) => this.handleDrag(e, true)}
        onDragLeave={(e) => this.handleDrag(e, false)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
        style={{
          backgroundImage: "url(" + this.state.img + ")",

          width: this.props.width,
          height: this.props.height,
        }}
      >
        <div className="DND-DropCenter">
          <p
            className="DND-Border"
            style={{
              width: this.state.drag ? "95%" : "65%",
              height: this.state.drag ? "95%" : "30%",
              fontSize: this.state.drag ? "3em" : "1.2em",
              borderRadius: this.state.drag ? "10px" : "50px",
              margin: "0px",
              transition: "all 200ms",
            }}
          >
            {!this.state.drag ? "Drag and drop your image here" : "Drop!"}
          </p>
        </div>
      </div>
    );
  }
}

export default DragAndDrop;
