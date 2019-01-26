import React from "react";

const Header = ({ changeRoute }) => {
  return (
    <header>
      <div className="row text-center">
        <div className="mx-auto pt-4">
          <h1
            style={{ fontSize: "60px" }}
            className="logo pointer"
            onClick={() => changeRoute("Login", "")}
            to={"/"}
          >
            ToDoList!
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
