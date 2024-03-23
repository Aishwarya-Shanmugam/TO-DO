 // eslint-disable-next-line no-unused-vars
 import  React from "react";
import './Todo.css'

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
      <div
        className="card"
        key={todo.id}
        style={{ border: "1px solid black"}}>
            <div className="md-1">
        <p>
          <b id="name"> Name : </b>
         <b> {todo.taskName}</b>
        </p>
        <p>
          <b id="description">Description : </b>
          <b>{todo.description}</b>
        </p>
        <div className="md-2">
          <label htmlFor="status" className="me-1">
            <b id="status">Status:</b>
          </label>
          <select
            className={
              todo.status === "Completed"? "bg-success text-white": "bg-danger text-white"}
            value={todo.status}
            name="status"
            onChange={(e) => updateStatus(todo.id, e.target.value)}>
            <option
              value="Completed"
              className={
                todo.status === "Completed" ? "bg-success" : ""}>
              Completed
            </option>
            <option
              value="Not Completed"
              className={
                todo.status !== "Completed" ? "bg-danger text-white" : ""}>
              Not Completed
            </option>
          </select>
          </div>
        </div>
        <div className="text-center m-1 p-2">
          <button
            className="btn md-2 btn-warning"
            onClick={() => editTodo(todo.id)}
            type="button"
          >
            Edit
          </button>
          
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
            type="button">
            Delete
          </button>
        </div>
      </div>
  );
}



import PropTypes from "prop-types";
import "./Todo.css";


Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["Completed", "Not Completed"]).isRequired,
  }).isRequired,
  updateStatus: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};