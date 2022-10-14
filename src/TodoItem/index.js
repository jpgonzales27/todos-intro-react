import React from "react";
import "./TodoItem.css";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <FaCheckCircle
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <FaTrashAlt
        className="Icon Icon-delete"
        onClick={props.onDelete}
      ></FaTrashAlt>
    </li>
  );
}

export { TodoItem };
