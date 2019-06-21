import React from "react";

function Genre(props) {
  return <option value={props.genre.id}>{props.genre.name}</option>;
}
export default Genre;
