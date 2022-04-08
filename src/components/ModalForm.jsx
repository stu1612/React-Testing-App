// npm
import { useState } from "react";
// utils
import validateString from "../utils/validateString";
import validateNumber from "../utils/validateNumber";
import addTask from "../utils/addTask";
// components
import Input from "./Input";
// data
import formInput from "../data/db.json";

export default function ModalForm({ listState, modalState }) {
  const [lists, setLists] = listState;
  const [modal, setModal] = modalState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // addTask(name, price);
    addTask(name, price, lists, setLists);
    setModal(false);
    resetInputs();
  }

  // function addTask(name, price) {
  //   const newTask = {
  //     id: Math.random() * 1000,
  //     name: name,
  //     price: price,
  //     isCompleted: false,
  //   };
  //   return setLists([...lists].concat(newTask));
  // }

  function resetInputs() {
    setName("");
    setPrice("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="modal-form">
        <h2>Add new shopping item</h2>
        <Input
          settings={formInput.name}
          state={[name, setName]}
          validation={validateString}
        />
        <Input
          settings={formInput.price}
          state={[price, setPrice]}
          validation={validateNumber}
        />
        <button>Submit</button>
      </form>
      <button onClick={() => setModal(false)}>Close</button>
    </div>
  );
}
