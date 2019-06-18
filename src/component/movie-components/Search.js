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
  getMovies = () => {
    this.props.fetchMovies(
      this.state.searchInput,
      this.props.pageNumber,
      this.props.perPage
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
  componentWillUnmount() {
    this.search.cancel();
  }
}

export default Search;
