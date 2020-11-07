import React, { Component } from "react";

import "../../styles/global/MultiLineInput.css";

class MLInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      inputWidth: "",
      placeholder: props.placeholder,
      lineCount: 1,
      counter: "",
    };
    this.sizerRef = React.createRef();
    this.inputRef = React.createRef();
  }

  handleInputChange = (val) => {
    this.setState({ input: val }, () => {
      var linesFromWidth = Math.ceil(
        this.sizerRef.current.clientWidth / this.inputRef.current.clientWidth
      );
      var lineBreakCount = val.split(/\r\n|\r|\n/).length;
      var newCount = linesFromWidth + lineBreakCount;

      if (newCount >= this.props.maxRows) {
        this.setState({ lineCount: this.props.maxRows });
      } else {
        this.setState({ lineCount: newCount });
      }

      if (this.props.max) {
        this.handleCounter(val);
      }

      this.props.inputSubmit(this.state.input);
    });
  };

  handleCounter = (val) => {
    var length;
    if (val.length <= this.props.max) {
      length = val.length + " / " + this.props.max + " character limit.";
    } else {
      length = "Too long!";
    }
    this.setState({ counter: length });
  };

  componentDidMount = () => {
    if (this.props.max) {
      this.setState({
        counter: 0 + " / " + this.props.max + " character limit.",
      });
    }
  };

  render() {
    return (
      <div className={""} style={{ textAlign: "right" }}>
        <div
          className="MLI-box lead rounded-lg"
          style={{
            borderColor:
              this.state.input.length > this.props.max ? "lightcoral" : "blue",
          }}
        >
          <textarea
            ref={this.inputRef}
            className="MLI-input lead p-2"
            placeholder={this.state.placeholder}
            rows={this.state.lineCount}
            onChange={(e) => this.handleInputChange(e.target.value)}
            style={{ fontSize: this.props.textSize }}
          >
            {this.state.input}
          </textarea>
          <p
            ref={this.sizerRef}
            className={"MLI-inputSizer lead"}
            style={{ visibility: "hidden", fontSize: this.props.textSize }}
          >
            {this.state.input}
          </p>
        </div>
        <small className={"MLI-counter lead my-1"}>{this.state.counter}</small>
      </div>
    );
  }
}

export default MLInput;
