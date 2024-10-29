import React from "react";
import PropTypes from "prop-types";

function TaskEdit({ editText, handleEditChange, saveEditText, onSwitchEditing }) {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        saveEditText();
      }}
    >
      <input
        className="edit"
        type="text"
        value={editText}
        onChange={handleEditChange}
        onBlur={onSwitchEditing}
        autoFocus
      />
    </form>
  );
}

TaskEdit.propTypes = {
  editText: PropTypes.string.isRequired,
  handleEditChange: PropTypes.func.isRequired,
  saveEditText: PropTypes.func.isRequired,
  onSwitchEditing: PropTypes.func.isRequired,
};

export default TaskEdit;
