// npm
import { useState } from "react";
// utils
import validateString from "../utils/validateString";
import validateNumber from "../utils/validateNumber";
// components
import Input from "./Input";
// data
import formInput from "../data/db.json";

export default function ModalForm({ listState, modalState }) {
  const [isModal, setIsModal] = modalState;
  const [lists, setLists] = listState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(lists, setLists);
    setIsModal(false);
    resetInputs();
  }

  function addTask(lists, setLists) {
    const newItem = {
      id: Math.random() * 1000,
      name: name,
      price: price,
    };
    return setLists([...lists, newItem]);
  }

  function resetInputs() {
    setName("");
    setPrice("");
  }

  return (
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
  );
}
