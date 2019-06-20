import React from "react";
function Reaction(props) {
  function reactOnMovie() {
    props.reactOnMovie(props.type);
  }
  return (
    <div>
      <button onClick={reactOnMovie}>{props.type}</button>
    </div>
  );
}
export default Reaction;
