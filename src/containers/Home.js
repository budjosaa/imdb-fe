import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import MovieCard from "../component/movie-components/MovieCard";
import Pagination from "react-js-pagination";
import Search from "../component/movie-components/Search";
import GenresList from "../component/movie-components/GenresList";

class Home extends Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.fetchMovies(
      "",
      params.get("page") || 1,
      params.get("elementsPerPage") || 5,
      params.get("genre") || ""
    );
  }
  fetchMovies(title, pageNumber, elementsPerPage, genre) {
    this.props.getMovies({
      pageNumber,
      title,
      elementsPerPage,
      genre
    });
    this.createHistory(title, pageNumber, elementsPerPage, genre);
  }
  createHistory(title, pageNumber = 1, elementsPerPage = 5, genre) {
    this.props.history.push(
      `/home/?page=${pageNumber}&elementsPerPage=${elementsPerPage}&title=${title}&genre=${genre}`
    );
  }
  handleFetchMovies = (title, pageNumber, elementsPerPage, genre) => {
    this.fetchMovies(title, pageNumber, elementsPerPage, genre);
  };

  renderMovies = () => {
    return this.props.movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  };
  handlePageChange = pageNumber => {
    const params = new URLSearchParams(this.props.location.search);
    this.fetchMovies(
      params.get("title"),
      pageNumber,
      params.get("elementsPerPage"),
      params.get("genre")
    );
  };

  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        <GenresList
          title={new URLSearchParams(this.props.location.search).get("title")}
          perPage={this.props.perPage}
          pageNumber={this.props.activePage}
          fetchMovies={this.handleFetchMovies}
        />
        <Search
          genre={new URLSearchParams(this.props.location.search).get("genre")}
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
