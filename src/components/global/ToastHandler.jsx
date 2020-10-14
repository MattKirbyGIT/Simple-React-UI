import React, { Component } from "react";

class ToastHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  renderToast = () => {
    var currentToasts = this.state.toasts;
    var newToasts = this.props.toasts;

    newToasts.forEach((newToast) => {
      var unique = true;
      currentToasts.forEach((toast) => {
        if (toast === newToast) {
          unique = false;
        }
      });
      if (unique) {
        this.setState({ toasts: [newToast] });
      }

      return this.state.toasts;
    });
  };

  componentDidUpdate() {
    if (this.props.toast != this.state.toasts[this.state.toasts.length - 1]) {
      this.setState({ toasts: [...this.state.toasts, this.props.toast] });
      this.handleToastAmount();
    }
  }

  handleToastAmount = () => {
    var toastsArray = this.state.toasts;
    if (toastsArray.length > 3) {
      this.setState({
        toasts: toastsArray.slice(Math.max(toastsArray.length - 3, 0)),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={"TH-wrapper"}>
          <div style={{ float: "right" }}>
            <div style={{ width: "100%" }}>{this.props.toast}</div>
          </div>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default ToastHandler;
