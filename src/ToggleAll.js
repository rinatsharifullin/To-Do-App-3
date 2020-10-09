import React from "react";

import propTypes from "prop-types";

const ToggleAll = ({ toggleAll, todos }) => {
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => {
          toggleAll(e.target.checked);
        }}
        checked={!todos.some((todo) => !todo.completed)}
      />
      <label htmlFor="toggle-all" />
    </>
  );
};

ToggleAll.propTypes = {
  toggleAll: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      labelName: PropTypes.string.isRequired,
      completed: Proptypes.bool.isRequired,
    })
  ).isRequired,
};

export default ToggleAll;
