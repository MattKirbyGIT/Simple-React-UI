import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";

import Icon from "./Icon";
import ButtonAdv from "./ButtonAdv";
import "../../styles/global/Toast.css";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: props.timeout,
      timer: 0,
      hover: false,
      display: true,
      type: props.type,
      icon: undefined,
      text: props.text,
    };
  }

  startTimer = () => {
    if (this.state.timer === 0 && this.state.timeout) {
      this.setState({ timer: setInterval(this.tick, 1000) });
    }
  };

  tick = () => {
    if (this.state.timeout > 0) {
      let remaining = this.state.timeout - 1;
      this.setState({
        timeout: remaining,
      });

      if (remaining === 0) {
        clearInterval(this.state.timer);
        this.setState({ display: false });
      }
    }
  };

  componentDidMount() {
    if (this.state.type === "danger") {
      this.setState({
        icon: (
          <Icon
            display={true}
            icon={"exclam"}
            iconColor={"lightcoral"}
            size={"2em"}
          />
        ),
      });
    }

    if (this.state.timeout) {
      this.startTimer();
    }

    this.setState({ display: true });
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleToggle = () => {
    this.setState({ display: false });
  };

  handleAccept = () => {
    this.props.accept();
    this.handleToggle();
  };

  render() {
    return (
      <Fade appear={true} in={this.state.display} unmountOnExit={true}>
        <div
          className="TN-box shadow py-2 px-3 m-2"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          style={{
            maxWidth: !this.state.display ? "0" : "100%",
            transition: "all 200ms",
          }}
        >
          <div className={"TN-content-box"}>
            {this.state.icon}
            <div className={"TN-content"}>
              <p className="lead TN-text my-0 mx-3 text-muted">
                {this.props.text}
              </p>
              <small
                className="TN-text-small lead my-0 mx-3"
                style={{ display: this.props.smallText ? "block" : "none" }}
              >
                {this.props.smallText}
              </small>

              <div
                className="TN-choice mx-3 my-2"
                style={{
                  display:
                    this.props.cancel || this.props.accept ? "flex" : "none",
                }}
              >
                <ButtonAdv
                  display={this.props.cancel ? true : false}
                  pill={true}
                  label={"Cancel"}
                  labelColor={"#6c757d"}
                  fontSize={"1.1em"}
                  icon={"close"}
                  iconColor={"lightCoral"}
                  click={(event) => this.handleToggle()}
                />

                <ButtonAdv
                  display={this.props.accept ? true : false}
                  pill={true}
                  label={"Accept"}
                  labelColor={"#6c757d"}
                  fontSize={"1.1em"}
                  icon={"check"}
                  iconColor={"#80F0B8"}
                  click={(event) => this.handleAccept()}
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Toast;
