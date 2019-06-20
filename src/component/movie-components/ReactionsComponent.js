import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { likeMovie } from "../../store/actions/MovieActions";
import Reaction from "./Reactions/Reaction";

class ReactionsComponet extends React.Component {
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
        <Reaction type="like" reactOnMovie={this.handleReactOnMovie} />
        <Reaction type="dislike" reactOnMovie={this.handleReactOnMovie} />
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
  )(ReactionsComponet)
);
