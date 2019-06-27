import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createMovie } from "../../store/actions/MovieActions";
import { debounce, trim } from "lodash";
import {
  getThirdApiMovies,
  clearSuggestions
} from "../../store/actions/ThirdPartyApiActions";
import Suggestion from "./Suggestion";
class AddMovie extends React.Component {
  state = {
    title: "",
    description: "",
    image_url: "",
    searchInput: ""
  };

  componentDidMount() {
    this.search = debounce(this.getSuggestedMovies, 500);
  }

  componentWillUnmount() {
    this.search.cancel();
  }

  resetInputs = () => {
    this.setState({
      title: "",
      description: "",
      image_url: ""
    });
  };

  getSuggestedMovies = () => {
    if (trim(this.state.searchInput).length === 0) {
      this.props.clearSuggestions();
      return;
    }
    this.props.getThirdApiMovies({
      title: this.state.searchInput
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    this.handleChange(event);
    this.search();
  };

  setMovieForm(suggestion) {
    const { title, overview, poster_path } = suggestion;
    const image_url = `https://image.tmdb.org/t/p/w185${poster_path}`;
    this.setState({
      title,
      description: overview,
      image_url
    });
  }
  handleSetMovieFrom = suggestion => {
    this.setMovieForm(suggestion);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, image_url } = this.state;
    this.props.createMovie({
      title,
      description,
      image_url
    });
    this.resetInputs();
  };

  renderSuggestedMovies = () => {
    const suggestions = this.props.suggestedMovies.slice(0, 6);
    if (suggestions.length > 0) {
      return suggestions.map(suggestion => (
        <Suggestion
          key={suggestion.id}
          suggestion={suggestion}
          onClick={this.handleSetMovieFrom}
        />
      ));
    }
    return null;
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          name="searchInput"
          placeholder="Search for movie..."
        />
        {this.renderSuggestedMovies()}
        <form onSubmit={this.handleSubmit}>
          Title:{" "}
          <input
            onChange={this.handleChange}
            name="title"
            type="text"
            value={this.state.title}
          />
          Description:
          <input
            onChange={this.handleChange}
            name="description"
            type="text"
            value={this.state.description}
          />
          Image_url:
          <input
            onChange={this.handleChange}
            name="image_url"
            type="text"
            value={this.state.image_url}
          />
          <input type="submit" value="Create Movie" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    suggestedMovies: state.suggestions.suggestedMovies
  };
};

const mapDispatchToProps = {
  createMovie,
  getThirdApiMovies,
  clearSuggestions
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddMovie)
);
