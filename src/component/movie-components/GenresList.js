import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getGenres } from "../../store/actions/MovieActions";
import Genre from "./Genre";
class GenresList extends React.Component {
  componentDidMount() {
    this.props.getGenres();
  }

  filterMovies = event => {
    const { value } = event.target;
    this.props.fetchMovies(
      this.props.title,
      this.props.pageNumber,
      this.props.perPage,
      value
    );
  };
  renderGenres = () => {
    return this.props.genres.map(genre => (
      <Genre key={genre.id} genre={genre} />
    ));
  };
  render() {
    return (
      <div>
        <select onChange={this.filterMovies} name="genres">
          <option value="">{"Select genre"}</option>
          {this.renderGenres()}
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    genres: state.movie.genres
  };
};
const mapDispatchToProps = {
  getGenres
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GenresList)
);
