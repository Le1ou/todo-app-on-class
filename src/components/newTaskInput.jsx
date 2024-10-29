import React from "react";
import PropTypes from "prop-types";

function NewTaskInput({ onLabelChange, label }) {
  return <input className="new-todo" onChange={onLabelChange} value={label} placeholder="What needs to be down?" />;
}

NewTaskInput.defaultProps = {
  onLabelChange: () => {},
};

NewTaskInput.propTypes = {
  label: PropTypes.string.isRequired,
  onLabelChange: PropTypes.func,
};

export default NewTaskInput;
