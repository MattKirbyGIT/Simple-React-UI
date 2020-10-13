import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faTimes,
  faSearch,
  faArrowRight,
  faExclamationCircle,
  faCheck,
  faEllipsisH,
  faBars,
  faPlus,
  faUserPlus,
  faSignInAlt,
  faTag,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/global/Icon.css";

class Icon extends Component {
  state = { icon: undefined };

  handleIcon = () => {
    if (this.props.icon === "close") {
      this.setState({ icon: faTimes });
    } else if (this.props.icon === "photo") {
      this.setState({ icon: faImage });
    } else if (this.props.icon === "arrowRight") {
      this.setState({ icon: faArrowRight });
    } else if (this.props.icon === "exclam") {
      this.setState({ icon: faExclamationCircle });
    } else if (this.props.icon === "check") {
      this.setState({ icon: faCheck });
    } else if (this.props.icon === "elipsis") {
      this.setState({ icon: faEllipsisH });
    } else if (this.props.icon === "search") {
      this.setState({ icon: faSearch });
    } else if (this.props.icon === "hamburgerMenu") {
      this.setState({ icon: faBars });
    } else if (this.props.icon === "userPlus") {
      this.setState({ icon: faUserPlus });
    } else if (this.props.icon === "signIn") {
      this.setState({ icon: faSignInAlt });
    } else if (this.props.icon === "plus") {
      this.setState({ icon: faPlus });
    } else if (this.props.icon === "tag") {
      this.setState({ icon: faTag });
    } else if (this.props.icon === "clipboard") {
      this.setState({ icon: faClipboard });
    } else {
    }
  };

  componentDidMount() {
    this.handleIcon();
  }

  render() {
    return (
      <div
        className="icon-wrapper p-2"
        style={{
          display: this.props.display ? "flex" : "none",
          backgroundColor: this.props.bgColor,
          width: "2em",
          height: "2em",
        }}
      >
        <FontAwesomeIcon
          className="icon effect"
          icon={this.state.icon}
          color={this.props.iconColor}
          style={{ fontSize: this.props.size ? this.props.size : "1.4em" }}
        />
      </div>
    );
  }
}

export default Icon;
