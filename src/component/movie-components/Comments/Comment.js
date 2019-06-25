import React from "react";

function Comment(props) {
  function deleteComment() {
    props.deleteComment(props.comment.id);
  }
  return (
    <div>
      <p>{props.comment.user.name}:</p>
      <p>{props.comment.content}</p>
      <button onClick={deleteComment}>X</button>
    </div>
  );
}
export default Comment;
