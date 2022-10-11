import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = useState("second");

  /*
    Desestructuramos las funciones que necesitamos 
    para añadir un TODO y cerrar nuestro modal
  */
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChangeValue = (evento) => {
    setNewTodoValue(evento.target.value);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (evento) => {
    // prevent default para evitar recargar la página
    evento.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue("");
    // Cerramos nustro modal
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Add TODO" onChange={onChangeValue} />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={closeModal}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Guardar
        </button>
      </div>
      {newTodoValue}
    </form>
  );
};

export { TodoForm };
