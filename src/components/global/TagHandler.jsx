import React, { Component } from "react";
import Tag from "./Tag";

class TagHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagComponents: [],
      tagData: [],
      tagIdHandler: 0,
      maxTags: this.props.maxTags,
    };
  }

  addTagComponent = () => {
    this.setState(
      {
        tagComponents: [
          ...this.state.tagComponents,
          <Tag
            key={this.state.tagIdHandler}
            id={this.state.tagIdHandler}
            inputSubmit={this.handleTagInput}
          />,
        ],
      },
      () => {
        this.setState({
          tagData: [...this.state.tagData, [this.state.tagIdHandler, ""]],
          tagIdHandler: this.state.tagIdHandler + 1,
        });
      }
    );
  };

  handleTagInput = (id, newData) => {
    var tagData = this.state.tagData;

    for (var i = 0; i < tagData.length; i++) {
      if (tagData[i][0] === id) {
        if (newData.length === 0) {
          tagData.splice(i, 1);
        } else {
          tagData[i][1] = newData;
        }
      }
    }

    if (
      tagData[tagData.length - 1][1] !== "" &&
      this.state.tagData.length < this.state.maxTags
    ) {
      this.addTagComponent();
    }

    this.setState({ tagData: tagData });

    var tagsArray = tagData
      .map((array) => {
        return array[1];
      })
      .filter((x) => x);
    console.log(tagsArray);
    this.props.inputSubmit(tagsArray);
  };

  componentDidMount = () => {
    this.addTagComponent();
  };

  render() {
    return <div>{this.state.tagComponents}</div>;
  }
}

export default TagHandler;
