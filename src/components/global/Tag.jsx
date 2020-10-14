import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import ButtonAdv from "./ButtonAdv";
import SLInput from "./SingleLineInput";
import "../../styles/global/Tag.css";

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true,
      tagData: "",
      hov: false,
      edit: false,
    };
  }

  handleHover = () => {
    this.setState({ hov: !this.state.hov });
  };

  toggleEdit = () => {
    if (!this.state.tagData.length > 0)
      this.setState({ edit: !this.state.edit });
  };

  handleInput = (e) => {
    if (!e) {
      this.setState({ display: false });
    }
    this.props.inputSubmit(this.props.id, e);
    this.setState({ tagData: e }, () => {});
  };

  render() {
    return (
      <React.Fragment>
        <Fade in={this.state.display} appear={true} unmountOnExit={true}>
          <div
            className="TG-box shadow px-2 my-2 mr-4 ml-0 test"
            style={{
              background: !this.state.hov ? "#f8f9fa" : "#e9ecef",
              transition: "all 200ms",
            }}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div
              className=""
              style={{ display: !this.state.edit ? "block" : "none" }}
            >
              <ButtonAdv
                display={!this.state.edit}
                reverse={true}
                label={"Tag"}
                fontSize={"1.2em"}
                icon={"plus"}
                iconColor={"#6c757d"}
                labelColor={"#6c757d"}
                bg={"none"}
                bgHov={"none"}
                click={this.toggleEdit}
              />
            </div>

            <div
              className=""
              style={{ display: this.state.edit ? "inline-block" : "none" }}
            >
              <SLInput
                display={this.state.edit}
                shrink={true}
                textSize={"1.1em"}
                maxHeight={"50px"}
                minWidth={"84px"}
                clear={true}
                bg={"none"}
                bgHov={"none"}
                focusOnMount={true}
                onBlur={this.toggleEdit}
                inputSubmit={(e) => this.handleInput(e)}
              />
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Tag;
