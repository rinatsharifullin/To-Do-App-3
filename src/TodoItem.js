import React from "react";
import PropTypes from "prop-types";
export const myClassName = "todo-item";
const TodoItem = ({ id, labelName }) => {
  // debugger
  // const id = props.id;
  // const labelName = props.labelName;

  // const {id, labelName}  = props;

  // return React.createElement('div',{className: 'todo-item'}, [
  //     React.createElement('input', {type:'checkbox', id:id}),
  //     React.createElement('label', {htmlFor: id}, labelName),
  //     React.createElement('br', {}),
  // ])

  return (
    <div className="myClassName">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
TodoItem.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
};
export default TodoItem;
// test
