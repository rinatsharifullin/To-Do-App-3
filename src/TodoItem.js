import React from 'react';
import ReactDOM from 'react-dom';

const TodoItem = ({id, labelName}) => {
  // debugger
  // const id = props.id;
  // const labelName = props.labelName;

  // const {id, labelName}  = props;

  return React.createElement('div',{className: 'todo-item'}, [
      React.createElement('input', {type:'checkbox', id:id}),
      React.createElement('label', {htmlFor: id}, labelName),
      React.createElement('br', {}),
  ])
}