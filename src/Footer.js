import React from "react";

import PropTypes from "prop-types";


import FilterItems from './FilterItems';

const Footer = ({ todos, handleClear, handleClick, todoFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.completed).length}</strong>
        {todos.filter((todo) => !todo.completed).length != 1
          ? " items "
          : " item "}{" "}
        left
      </span>

      <FilterItems todoFilter={todoFilter} handleClick={handleClick} />

      <button className="clear-completed" onClick={handleClear}>
        Clear Completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      labelName: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  todoFilter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Footer;
