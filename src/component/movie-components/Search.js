import React from "react";
import debounce from "lodash.debounce";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      srchInput: ""
    };
  }
  getMovies = () => {
    this.props.fetchMovies(
      this.state.srchInput,
      this.props.pageNumber,
      this.props.perPage
    );
  };
  handleInputChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      srchInput: value
    });
    this.search();
  };
  search = debounce(this.getMovies, 750);

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          placeholder="Search"
          value={this.state.srchInput}
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
