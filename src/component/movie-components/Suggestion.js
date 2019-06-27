import React from "react";

const Suggestion = props => {
  function setForm() {
    props.onClick(props.suggestion);
  }
  return <ul onClick={setForm}>{props.suggestion.title}</ul>;
};
export default Suggestion;
