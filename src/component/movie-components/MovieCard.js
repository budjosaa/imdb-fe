import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import ReactionsComponent from "./ReactionsComponent";
import { Link } from "react-router-dom";

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
      <p>Number of visits: {props.movie.times_visited}</p>
      <p>Likes:{props.movie.num_of_likes}</p>
      <p>Dislikes:{props.movie.num_of_dislikes}</p>
      <ReactionsComponent movieId={props.movie.id} />
      <Link to={`/movie/${props.movie.id}`}> Link to movie! </Link>
      <br />
    </div>
  );
};

export default MovieCard;
