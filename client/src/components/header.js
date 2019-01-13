import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="row text-center">
        <div className="col mt-5">
          <Link className="logo" to={"/"}>
            <h1 style={{ fontSize: "60px" }}>ToDoList!</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
