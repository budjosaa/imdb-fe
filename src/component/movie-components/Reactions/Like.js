import React from "react";
function Like(props) {
  function reactOnMovie() {
    props.reactOnMovie("like");
  }
  return (
    <div>
      <button onClick={reactOnMovie}>Like</button>
    </div>
  );
}
export default Like;
