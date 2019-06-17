import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import MovieCard from "../component/MovieCard";
import Pagination from "react-js-pagination";

class Home extends Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.props.getMovies({
      pageNumber: params.get("page") || 1,
      elementsPerPage: params.get("elementsPerPage") || 5
    });
  }

  renderMovies = () => {
    return this.props.movies.map(movie => (
      <div key={movie.id}>
        <MovieCard key={movie.id} movie={movie} />
        <Link to={`/movie/${movie.id}`}> Link to movie! </Link>
      </div>
    ));
  };
  handlePageChange = pageNumber => {
    const params = new URLSearchParams(this.props.location.search);
    this.props.getMovies({
      pageNumber: pageNumber,
      elementsPerPage: params.get("elementsPerPage")
    });
    this.props.history.push(
      `/home/?page=${pageNumber}&elementsPerPage=${this.props.perPage}`
    );
  };

  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        {this.renderMovies()}
        <br />
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={this.props.perPage}
          itemClass="page-item"
          linkClass="page-link"
          totalItemsCount={this.props.total}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.data,
    total: state.movie.total,
    activePage: state.movie.activePage,
    perPage: state.movie.per_page
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
