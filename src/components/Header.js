import React from "react";
import Button from "./Button";

const Header = ({ title, onShow , showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Hide" : "Show"} onShow={onShow}/>
    </header>
  );
};

export default Header;
 