import React, { Component } from "react";
import "../../styles/global/ToggleSwitch.css";

class ToggleSwitch extends Component {
  state = {
    hover: false,
    toggled: this.props.default,
    size: this.props.size ? this.props.size : "25",
  };

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleClick = () => {
    this.setState({ toggled: !this.state.toggled }, () => {
      if (this.props.inputSubmit) {
        this.props.inputSubmit(this.state.toggled);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="TS-Wrapper bg-light p-3 rounded-pill"
          style={{
            maxWidth: this.props.maxWidth ? this.props.maxWidth : "200px",
          }}
        >
          <p
            className="TS-Label lead text-muted mr-2"
            style={{
              textAlign: "left",
              position: "relative",
            }}
          >
            {this.props.label}
            <span
              className="TS-LabelToggle lead"
              style={{
                color: this.state.toggled ? "#80F0B8" : "lightcoral",
                transition: "all 200ms",
              }}
            >
              {this.state.toggled ? this.props.label1 : this.props.lable0}
            </span>
          </p>
          <div
            className="TS-Box rounded-pill"
            style={{
              transition: "all 200ms",
              background: this.state.toggled ? "#80F0B8" : "lightcoral",
            }}
            onClick={this.handleClick}
          >
            <div
              style={{
                margin: this.state.size * 0.2 + "px",
                width: this.state.size * 2.2,
              }}
            >
              <div
                className="TS-Thumb rounded-pill shadow"
                style={{
                  background: !this.state.hover ? "white" : "#e9ecef",
                  transition: "all 100ms ease-in",
                  width: this.state.size + "px",
                  height: this.state.size + "px",
                  marginLeft: this.state.toggled
                    ? this.state.size * 1.2 + "px"
                    : "0",
                  marginRight: !this.state.toggled
                    ? this.state.size * 1.2 + "px"
                    : "0",
                }}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              ></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToggleSwitch;
