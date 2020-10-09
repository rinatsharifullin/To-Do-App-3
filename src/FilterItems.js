import React from "react";

import PropTypes from "prop-types";

import { ALL, ACTIVE, COMPLETED } from "./App";

const FilterItems = ({todoFilter, handleClick}) => {
  return (
<ul className="filters">
        <li>
          <a
            className={todoFilter == ALL ? "selected" : ""}
            onClick={() => {
              handleClick(ALL);
            }}
            href="#/"
          >
            All
          </a>
        </li>
        <li>
          <a
            className={todoFilter == ACTIVE ? "selected" : ""}
            onClick={() => {
              handleClick(ACTIVE);
            }}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={todoFilter == COMPLETED ? "selected" : ""}
            onClick={() => {
              handleClick(COMPLETED);
            }}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
  )
}

FilterItems.propTypes = {
  todoFilter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FilterItems;