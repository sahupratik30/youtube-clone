import React from "react";

const SideBarItem = (props) => {
  return (
    <li className={props.className} draggable="false" onClick={props.onClick}>
      <div>{props.Icon}</div>
      <p>{props.name}</p>
    </li>
  );
};

export default SideBarItem;
