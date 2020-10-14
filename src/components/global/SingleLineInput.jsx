import React, { Component } from "react";

import ButtonAdv from "./ButtonAdv";
import Fade from "react-bootstrap/Fade";
import "../../styles/global/SingleLineInput.css";

class SLInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      focus: this.props.focusOnMount,
      preWidth: "",
      inputWidth: this.props.minWidth,
      input: "",
      bg: "#f8f9fa",
      bgHov: "#e9ecef",
    };
    this.inputRef = React.createRef();
    this.sizerRef = React.createRef();
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleFocus = (event) => {
    this.setState({ focus: event });
    if (event === false && this.props.onBlur) {
      this.props.onBlur();
    }
  };

  handleInputChange = (val) => {
    this.setState({ input: val }, () => {
      var sizerWidth = this.sizerRef.current.clientWidth;
      if (sizerWidth < this.props.minWidth) {
        this.setState({ inputWidth: this.props.minWidth });
      } else {
        this.setState({ inputWidth: sizerWidth + "px" });
      }

      this.props.inputSubmit(this.state.input);
    });
  };

  handleClear = () => {
    this.setState({ input: "" });
    this.handleInputChange("");
  };

  componentDidMount = () => {
    if (this.props.bg) {
      this.setState({ bg: this.props.bg, bgHov: this.props.bgHov });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div className="SLInput-box">
            <span
              class={[
                "SLInput-pre lead p-0 rounded-lg",
                this.state.input ? "SLInput-pre-closed" : "mr-2",
              ].join(" ")}
              style={{
                fontSize: this.props.textSize,
                position: this.props.prepend ? "relative" : "absolute",
              }}
            >
              {this.props.prepend}
            </span>
            <div
              className={"SLInput-input-wrapper pl-2 rounded-lg"}
              style={{
                width: "100%",
                minWidth: this.props.minWidth,
                height: this.props.maxHeight,
                background: this.state.hover ? this.state.bgHov : this.state.bg,
                transition: "all 200ms",
              }}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
            >
              <input
                ref={this.inputRef}
                className={"lead SLInput-input p-0 py-2"}
                type="text"
                autoFocus={this.props.focusOnMount}
                onFocus={() => this.handleFocus(true)}
                onBlur={() => this.handleFocus(false)}
                value={this.state.input}
                placeholder={this.props.placeholder}
                size={4}
                onChange={(e) => this.handleInputChange(e.target.value)}
                style={{
                  width: this.props.shrink ? this.state.inputWidth : "100%",
                  fontSize: this.props.textSize,
                  minWidth: "50%",
                }}
              />
              <div
                ref={this.sizerRef}
                className="SLInput-sizer"
                style={{ fontSize: this.props.textSize }}
              >
                {this.state.input}
              </div>
              <div className="SLInput-clear-wrapper">
                <ButtonAdv
                  display={this.state.input && this.props.clear}
                  pill={true}
                  labelColor={"darkgrey"}
                  fontSize={"1.1em"}
                  icon={"close"}
                  iconColor={"darkgrey"}
                  iconHov={"lightcoral"}
                  bg={"none"}
                  click={this.handleClear}
                />
              </div>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default SLInput;
