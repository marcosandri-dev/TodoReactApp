import React from "react";
import ListItem from "./list-item";
import moment from "moment";

const ListDate = ({ date, todos, editTodo }) => {
  const filteredTodos = todos.filter(
    todo => date === moment(todo.created_date).format("DD/MM/YYYY")
  );

  return (
    <div className="mt-3">
      <h4>{date}</h4>
      {filteredTodos.map(todo => (
        <ListItem key={todo._id} todo={todo} editTodo={editTodo} />
      ))}
    </div>
  );
};

export default ListDate;
