import React from "react";

const Header = ({ changeRoute }) => {
  return (
    <header>
      <div className="row text-center">
        <div className="mx-auto pt-4">
          <p
            className="logo pointer"
            onClick={() => changeRoute("Login", "")}
            to={"/"}
          >
            <h1 style={{ fontSize: "60px" }}>ToDoList!</h1>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
