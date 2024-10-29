import React from "react";
import PropTypes from "prop-types";

function TaskView({ label, timeAgo, check, done, onToogleCheck, onSwitchEditing, delTodo }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={check} readOnly onClick={onToogleCheck} />
      <label onClick={onToogleCheck}>
        <span className="description">{label}</span>
        <span className="created">{timeAgo}</span>
      </label>
      {!done && <button className="icon icon-edit" onClick={onSwitchEditing}></button>}
      <button className="icon icon-destroy" onClick={delTodo}></button>
    </div>
  );
}

TaskView.propTypes = {
  label: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  onToogleCheck: PropTypes.func.isRequired,
  onSwitchEditing: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TaskView;
