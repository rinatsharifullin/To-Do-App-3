import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';


const App = () => {
  return React.createElement('div', {id: "mytodoapp"}, [
      React.createElement('h1', {},"My to do app"),
      React.createElement(TodoItem, {id:'lear-react', labelName: ' Learn react'}),
      React.createElement(TodoItem, {id:'create-todo-app', labelName: ' Create todo app'}),
      React.createElement(TodoItem, {id:'profit', labelName: ' Profit'}),

      // React.createElement('input', {type:'checkbox', id:'create-todo-app'}),
      // React.createElement('label', {htmlFor:'create-todo-app'}, ' Create todo app'),
      // React.createElement('br', {}),
      // React.createElement('input', {type:'checkbox', id:'profit'}),
      // React.createElement('label', {htmlFor:'profit'}, ' Profit'),

  ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root')) ;
// test