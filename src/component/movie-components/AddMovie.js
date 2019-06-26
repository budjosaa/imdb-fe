import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createMovie } from "../../store/actions/MovieActions";

class AddMovie extends React.Component {
  state = {
    title: "",
    description: "",
    image_url: ""
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, description, image_url } = this.state;
    this.props.createMovie({
      title,
      description,
      image_url
    });
    this.setState({
      title: "",
      description: "",
      image_url: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title: <input onChange={this.handleChange} name="title" type="text" />
          Description:
          <input onChange={this.handleChange} name="description" type="text" />
          Image_url:
          <input onChange={this.handleChange} name="image_url" type="text" />
          <input type="submit" value="Create Movie" />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  createMovie
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddMovie)
);
