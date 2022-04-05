// npm
import { useContext } from "react";
// components
import Modal from "../components/Modal";
// context
import { TaskContext } from "../contexts/TaskContext";

export default function ShoppingScreen({ isModal, setIsModal }) {
  const { items } = useContext(TaskContext);

  const showListItems = items.map((item) => (
    <li key={item.id}>
      {item.name} {item.price}
    </li>
  ));

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      <ul>{showListItems}</ul>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <Modal isModal={isModal} setIsModal={setIsModal} />
    </section>
  );
}
