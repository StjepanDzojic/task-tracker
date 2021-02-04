import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd , showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} onAdd={onAdd}/>
    </header>
  );
};

export default Header;
 