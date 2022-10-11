import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    /*
     cuando al estado se le envia una funcion
     esta accede al estado anterior del valor
     y lo que hacemos es retotnar algun valor
     para que se actualice otra vez

     en este caso si prevState es TRUE lo actualizaremos a false
     y si prevState es FALSE lo actualizaremos a true
    */
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
