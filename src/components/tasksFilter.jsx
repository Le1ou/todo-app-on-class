import React from "react";
import PropTypes from "prop-types";

const filters = ["all", "active", "completed"];

function TasksFilter({ status, filterTodos }) {
  return (
    <>
      {filters.map((filter) => (
        <li key={filter}>
          <button className={status === filter ? "selected" : ""} onClick={() => filterTodos(filter)}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      ))}
    </>
  );
}

TasksFilter.defaultProps = {
  status: "all",
  filterTodos: () => {},
};

TasksFilter.propTypes = {
  status: PropTypes.string.isRequired,
  filterTodos: PropTypes.func,
};

export default TasksFilter;