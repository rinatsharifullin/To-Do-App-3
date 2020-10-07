import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";
import "./style.css";
const TodoItemsFromOutSide = [
  { id: "lear-react", labelName: " Learn react" },
  { id: "create-todo-app", labelName: " Create todo app" },
  { id: "profit", labelName: " Profit" },
  { id: "have-fun", labelName: " Have fun" },
];

const App = () => {
  const [todos, setTodos] = useState(TodoItemsFromOutSide);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [
      ...todos,
      { id: newTodo.replace(" ", "-"), labelName: newTodo },
    ];
    setTodos(newTodos);
    setNewTodo("");
  };
  return (
    <div id="my-todo-app" className="my-todo-app">
      <h1>My todo app</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </form>
      {todos.map((item) => {
        return (
          <TodoItem key={item.id} id={item.id} labelName={item.labelName} />
        );
      })}
      {/* <TodoItem id="lear-react" labelName="Learn react" /> */}
    </div>
  );
};
// const App = () => {
//   return React.createElement('div', {id: "mytodoapp"}, [
//       React.createElement('h1', {},"My to do app"),
//       React.createElement(TodoItem, {id:'lear-react', labelName: ' Learn react'}),
//       React.createElement(TodoItem, {id:'create-todo-app', labelName: ' Create todo app'}),
//       React.createElement(TodoItem, {id:'profit', labelName: ' Profit'}),

//       // React.createElement('input', {type:'checkbox', id:'create-todo-app'}),
//       // React.createElement('label', {htmlFor:'create-todo-app'}, ' Create todo app'),
//       // React.createElement('br', {}),
//       // React.createElement('input', {type:'checkbox', id:'profit'}),
//       // React.createElement('label', {htmlFor:'profit'}, ' Profit'),

//   ])
// }
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(React.createElement(App), document.getElementById('root')) ;
