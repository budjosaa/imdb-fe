import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovie } from "../../store/actions/MovieActions";

class SinglePageMovie extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    this.props.getMovie({ id: this.props.match.params.id });
  }
  render() {
    return (
      <div>
        <h1>{this.props.singleMovie.title}</h1>
        <p>{this.props.singleMovie.description}</p>
        <p>Number of visits: {this.props.singleMovie.times_visited}</p>
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    singleMovie: state.movie.singleMovie
  };
};
const mapDispatchToProps = {
  getMovie
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SinglePageMovie)
);
