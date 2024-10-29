import React from "react";
import PropTypes from "prop-types";

import Task from "./task";

function TaskList({ todos, delTodo, onToogleCheck, handleEditChange, onSwitchEditing, saveEditText }) {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        key={id}
        {...itemProps}
        delTodo={() => delTodo(id)}
        onToogleCheck={() => onToogleCheck(id)}
        saveEditText={() => saveEditText(id)}
        handleEditChange={(evt) => handleEditChange(id, evt.target.value)}
        onSwitchEditing={() => onSwitchEditing(id)}
      />
    );
  });

  return <>{elements}</>;
}

TaskList.defaultProps = {
  todos: [],
  delTodo: () => {},
  onToogleCheck: () => {},
  handleEditChange: () => {},
  onSwitchEditing: () => {},
  saveEditText: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      edit: PropTypes.bool,
      editText: PropTypes.string,
      date: PropTypes.number.isRequired,
    })
  ),
  delTodo: PropTypes.func,
  onToogleCheck: PropTypes.func,
  handleEditChange: PropTypes.func,
  onSwitchEditing: PropTypes.func,
  saveEditText: PropTypes.func,
};

export default TaskList;
