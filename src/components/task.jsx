import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import TaskView from "./taskView";
import TaskEdit from "./taskEdit";

export default class Task extends React.Component {
  render() {
    const {
      label,
      date,
      done,
      edit,
      check,
      delTodo,
      onToogleCheck,
      handleEditChange,
      onSwitchEditing,
      editText,
      saveEditText,
    } = this.props;

    const timeAgo = `created ${formatDistanceToNow(new Date(date), { addSuffix: true, includeSeconds: true })}`;

    return (
      <li className={done ? "completed" : edit ? "editing" : ""}>
        {edit ? (
          <TaskEdit
            editText={editText}
            handleEditChange={handleEditChange}
            saveEditText={saveEditText}
            onSwitchEditing={onSwitchEditing}
          />
        ) : (
          <TaskView
            label={label}
            timeAgo={timeAgo}
            check={check}
            done={done}
            onToogleCheck={onToogleCheck}
            onSwitchEditing={onSwitchEditing}
            delTodo={delTodo}
          />
        )}
      </li>
    );
  }
}

Task.PropTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  check: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  onToogleCheck: PropTypes.func.isRequired,
  handleEditChange: PropTypes.func.isRequired,
  onSwitchEditing: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  saveEditText: PropTypes.func.isRequired,
};
