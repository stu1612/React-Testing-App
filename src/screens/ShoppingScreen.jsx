// npm
import { useContext, useState } from "react";
// components
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import Sorter from "../components/Sorter";
import { TaskContext } from "../contexts/TaskContext";

export default function ShoppingScreen({ modalState }) {
  const { lists, setLists } = useContext(TaskContext);
  const [isModal, setIsModal] = modalState;
  const [isCompleteStatus, setIsCompleteStatus] = useState(false);

  function toggleStatus() {
    setIsCompleteStatus(!isCompleteStatus);
  }

  const itemList = lists
    .filter((item) => item.isCompleted === isCompleteStatus)
    .map((item) => <ListItem key={item.id} item={item} />);

  const toggleDisplay = isCompleteStatus
    ? "Show pending items"
    : "Show completed items";

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      <Sorter lists={lists} setLists={setLists} />
      <ul>{itemList}</ul>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <p onClick={toggleStatus}>{toggleDisplay}</p>
      <Modal modalState={modalState} />
    </section>
  );
}
