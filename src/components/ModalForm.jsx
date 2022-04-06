// npm
import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
// utils
import validateString from "../utils/validateString";
import validateNumber from "../utils/validateNumber";
// components
import Input from "./Input";
// data
import formInput from "../data/db.json";

export default function ModalForm({ modalState }) {
  const { addTask } = useContext(TaskContext);
  const [isModal, setIsModal] = modalState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(name, price);
    setIsModal(false);
    resetInputs();
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
