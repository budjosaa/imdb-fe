import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getComments } from "../../../store/actions/CommentActions";
import Comment from "./Comment";

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.getComments({
      movieId: this.props.match.params.id
    });
  }
  renderComments = () => {
    return this.props.comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
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
  getComments
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsList)
);
