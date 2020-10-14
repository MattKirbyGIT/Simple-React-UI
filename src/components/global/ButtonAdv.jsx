import React, { Component } from "react";
import Icon from "./Icon";
import Fade from "react-bootstrap/Fade";
import "../../styles/global/ButtonAdv.css";

class ButtonAdv extends Component {
  constructor(props) {
    super();
    this.state = {
      display: props.display,
      hover: false,
      bg: "#f8f9fa",
      bgHov: "#e9ecef",
      fontSize: "1.2em",
      icon: props.icon,
      label: props.label,
    };
  }

  handlePanelClasses() {
    var classes = [];
    if (this.props.pill) {
      classes[0] = "rounded-pill";
    } else {
      classes[0] = "rounded-lg";
    }

    if (this.props.shadow) {
      classes[1] = "shadow";
    }

    if (this.props.topRight) {
      classes[2] = "topRight";
    }
    return classes.join(" ");
  }

  handleLabelClasses() {
    var classes = [];
    if (this.state.icon) {
      if (this.props.reverse) {
        classes[0] = "pr-3";
      } else {
        classes[0] = "pl-3";
      }
    } else {
      classes[0] = "px-3";
    }
    return classes.join(" ");
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  componentDidMount = () => {
    if (this.props.bg) {
      this.setState({ bg: this.props.bg, bgHov: this.props.bgHov });
    }

    if (this.props.fontSize) {
      this.setState({ fontSize: this.props.fontSize });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={this.props.display} unmountOnExit={true}>
          <div
            style={{
              display: this.props.display ? "block" : "none",
              width: this.props.width,
            }}
          >
            <div
              className={"TB-panel " + this.handlePanelClasses()}
              style={{
                background: this.state.hover ? this.state.bgHov : this.state.bg,
                transition: "all 200ms",
                fontSize: this.state.fontSize,
                flexDirection: this.props.reverse ? "row-reverse" : "row",
                width: this.props.width,
                justifyContent: "center",
              }}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              onClick={this.props.click}
            >
              <div
                style={{
                  maxWidth:
                    this.props.reveal && !this.state.hover ? "0" : "200px",
                  transition: "all 200ms",
                  color: this.props.labelColor,
                  display: this.state.label ? "block" : "none",
                }}
              >
                <p className={"TB-label my-2 " + this.handleLabelClasses()}>
                  {this.props.label}
                </p>
              </div>
              <div
                className={"m-1"}
                style={{ display: this.state.icon ? "block" : "none" }}
              >
                <Icon
                  size={this.state.fontSize}
                  display={true}
                  icon={this.state.icon}
                  iconColor={
                    this.state.hover && this.props.iconHov
                      ? this.props.iconHov
                      : this.props.iconColor
                  }
                />
              </div>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default ButtonAdv;
