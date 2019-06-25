import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createComment } from "../../../store/actions/CommentActions";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({
      content: value
    });
  };
  addComment = event => {
    const { key } = event;
    if (key === "Enter") {
      this.props.createComment({
        content: this.state.content,
        movieId: this.props.match.params.id
      });
      this.setState({
        content: ""
      });
    }
  };
  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          placeholder="Add comment"
          value={this.state.content}
          onKeyDown={this.addComment}
        />
      </div>
    );
  }
}
const mapDispatchToProps = {
  createComment
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddComment)
);
