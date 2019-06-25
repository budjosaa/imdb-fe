import React from "react";

function Comment(props) {
  return (
    <div>
      <p>{props.comment.user.name}:</p>
      <p>{props.comment.content}</p>
    </div>
  );
}
export default Comment;
