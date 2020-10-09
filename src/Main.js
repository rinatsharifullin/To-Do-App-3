import React from "react";

import ToggleAll from "./ToggleAll";

import TodoList from "./TodoList";

const Main = ({
  toggleAll,
  todos,
  nowShowingTodos,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <section className="main">
      <ToggleAll toggleAll={toggleAll} todos={todos} />
      <TodoList
        todos={nowShowingTodos}
        handleChange={updateTodo}
        handleDelete={deleteTodo}
      />
    </section>
  );
};

export default Main;
