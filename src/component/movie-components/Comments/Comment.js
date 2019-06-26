import React from "react";

const Comment = ({ comment, deleteComment }) => {
  function removeComment() {
    deleteComment(comment.id);
  }
  return (
    <div>
      <p>{comment.user.name}:</p>
      <p>{comment.content}</p>
      <button onClick={removeComment}>X</button>
    </div>
  );
};
export default Comment;
