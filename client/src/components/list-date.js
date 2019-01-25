import React from "react";
import ListItem from "./list-item";
import moment from "moment";

const ListDate = ({ date, todos, editTodo }) => {
  return (
    <div className="mt-3">
      <h4>{date}</h4>
      {todos.map(todo =>
        date === moment(todo.created_date).format("DD/MM/YYYY") ? (
          <ListItem key={todo._id} todo={todo} editTodo={editTodo} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ListDate;
