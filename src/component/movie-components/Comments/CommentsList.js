import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getComments,
  deleteComment
} from "../../../store/actions/CommentActions";
import Comment from "./Comment";

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.getComments({
      movieId: this.props.match.params.id
    });
  }
  deleteComment(movieId) {
    this.props.deleteComment({
      movieId
    });
  }
  handleDeleteMovie = movieId => {
    this.deleteComment(movieId);
  };
  handle;
  renderComments = () => {
    return this.props.comments.map(comment => (
      <Comment
        deleteComment={this.handleDeleteMovie}
        key={comment.id}
        comment={comment}
      />
    ));
  };
  render() {
    return (
      <div>
        <p>Comments:</p>
        {this.renderComments()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comment.comments
  };
};
const mapDispatchToProps = {
  getComments,
  deleteComment
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsList)
);
