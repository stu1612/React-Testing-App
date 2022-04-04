// npm
import { useContext } from "react";
// components
import Modal from "../components/Modal";
// context
import { TaskContext } from "../contexts/TaskContext";

export default function ShoppingScreen({ isModal, setIsModal }) {
  const { items } = useContext(TaskContext);

  const showListItems = items.map((item) => (
    <div key={item.id}>
      <li>
        {item.name} {item.price}
      </li>
    </div>
  ));

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      {showListItems}
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <Modal isModal={isModal} setIsModal={setIsModal} />
    </section>
  );
}
