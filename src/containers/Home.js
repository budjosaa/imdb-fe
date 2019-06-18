import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import MovieCard from "../component/movie-components/MovieCard";
import Pagination from "react-js-pagination";
import Search from "../component/movie-components/Search";

class Home extends Component {
  fetchMovies(title, pageNumber, elementsPerPage) {
    this.props.getMovies({
      pageNumber,
      title,
      elementsPerPage
    });
    this.createHistory(title, pageNumber, elementsPerPage);
  }
  createHistory(title, pageNumber = 1, elementsPerPage = 5) {
    this.props.history.push(
      `/home/?page=${pageNumber}&elementsPerPage=${elementsPerPage}&title=${title}`
    );
  }
  handleFetchMovies = (title, pageNumber, elementsPerPage) => {
    this.fetchMovies(title, pageNumber, elementsPerPage);
  };
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.fetchMovies(
      "",
      params.get("page") || 1,
      params.get("elementsPerPage") || 5
    );
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
    this.fetchMovies(
      params.get("title"),
      pageNumber,
      params.get("elementsPerPage")
    );
  };

  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        <Search
          perPage={this.props.perPage}
          pageNumber={this.props.activePage}
          fetchMovies={this.handleFetchMovies}
        />
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
