import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (avatar.length === 1 ? (
        <Avatar className="headerOption__icon">{avatar}</Avatar>
      ) : (
        <Avatar className="headerOption__icon" src={avatar} />
      ))}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
