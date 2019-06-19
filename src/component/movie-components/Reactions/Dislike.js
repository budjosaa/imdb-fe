import React from "react";
function Dislike(props) {
  function reactOnMovie() {
    props.reactOnMovie("dislike");
  }
  return (
    <div>
      <button onClick={reactOnMovie}>Disike</button>
    </div>
  );
}
export default Dislike;
