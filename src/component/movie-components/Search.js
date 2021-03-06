import React from "react";
import { debounce } from "lodash";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  componentDidMount() {
    this.search = debounce(this.getMovies, 750);
  }
  componentWillUnmount() {
    this.search.cancel();
  }
  getMovies = () => {
    this.props.fetchMovies(
      this.state.searchInput,
      this.props.pageNumber,
      this.props.perPage,
      this.props.genre
    );
  };
  handleInputChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      searchInput: value
    });
    this.search();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          placeholder="Search"
          value={this.state.searchInput}
        />
        <br />
      </div>
    );
  }
}

export default Search;
