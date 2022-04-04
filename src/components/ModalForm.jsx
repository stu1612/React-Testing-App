// npm
import { useContext, useState } from "react";
// context
import { TaskContext } from "../contexts/TaskContext";

export default function ModalForm({ setIsModal }) {
  const { items, setItems } = useContext(TaskContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // submit function - not ready yet
  function handleSubmit(event) {
    event.preventDefault();
    addTask(items, setItems);
    setIsModal(false);
    resetInputs(setName, setPrice);
  }

  function addTask(items, setItems) {
    const newItem = {
      id: Math.random() * 1000,
      name: name,
      price: price,
    };
    return setItems([...items, newItem]);
  }

  function resetInputs({ setName, setPrice }) {
    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Product Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Sofa"
        />
      </label>
      <label>
        Add Product Price:
        <input
          type="text"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Ex: 300"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
