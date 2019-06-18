import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const MovieCard = props => {
  return (
    <div>
      <h3>{props.movie.title}</h3>
      <br />
      <LinesEllipsis
        text={props.movie.description}
        maxLine={2}
        ellipsis="..."
      />
      <br />
      <p>Number of visits: {this.props.singleMovie.times_visited}</p>
    </div>
  );
};

export default MovieCard;
