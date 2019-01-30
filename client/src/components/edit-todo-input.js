import React from "react";

const EditTodoInput = ({
  editTodo,
  onChange,
  onKeyPress,
  toggleEdit,
  editTodoInputValue
}) => {
  return (
    <div className="row">
      <div className="col-12 col-md pb-2">
        <input
          type="text"
          className="form-control form-control-md"
          value={editTodoInputValue}
          onChange={onChange}
          onKeyPress={onKeyPress}
          name="editTodoInputValue"
        />
      </div>
      <div className="col-12 text-center col-md-auto">
        <button
          onClick={editTodo}
          type="button"
          className="btn btn-md btn-primary mr-2"
        >
          {"Edit"}
        </button>
        <button
          onClick={toggleEdit}
          type="button"
          className="btn btn-md btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTodoInput;
