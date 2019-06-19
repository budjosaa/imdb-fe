import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { likeMovie } from "../../store/actions/MovieActions";
import Like from "./Reactions/Like";
import Dislike from "./Reactions/Dislike";

class ReactionComponet extends React.Component {
  reactOnMovie(movieId, reaction) {
    this.props.likeMovie({
      movieId,
      reaction
    });
  }
  handleReactOnMovie = reaction => {
    this.reactOnMovie(this.props.movieId, reaction);
  };
  render() {
    return (
      <div>
        <Like reactOnMovie={this.handleReactOnMovie} />
        <Dislike reactOnMovie={this.handleReactOnMovie} />
      </div>
    );
  }
}
const mapDispatchToProps = {
  likeMovie
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ReactionComponet)
);
