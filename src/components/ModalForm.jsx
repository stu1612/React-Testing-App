// npm
import { useContext, useState } from "react";
// context
import { TaskContext } from "../contexts/TaskContext";
// utils
import validateString from "../utils/validateString";
import validateNumber from "../utils/validateNumber";
// components
import Input from "./Input";
// data
import formInput from "../data/db.json";

export default function ModalForm({ setIsModal }) {
  const { items, setItems } = useContext(TaskContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(items, setItems);
    setIsModal(false);
    resetInputs();
  }

  function addTask(items, setItems) {
    const newItem = {
      id: Math.random() * 1000,
      name: name,
      price: price,
    };
    return setItems([...items, newItem]);
  }

  function resetInputs() {
    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
