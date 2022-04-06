// npm
import { useContext, useState } from "react";
// components
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
// contexts
import { TaskContext } from "../contexts/TaskContext";

export default function ShoppingScreen({ modalState }) {
  const { lists } = useContext(TaskContext);
  const [isModal, setIsModal] = modalState;
  const [completedItems, setCompletedItems] = useState(false);

  function toggleCompletedItems() {
    setCompletedItems(!completedItems);
  }

  const inCompleteItems = lists
    .filter((item) => item.isCompleted === false)
    .map((item) => <ListItem key={item.id} item={item} />);
  const completeItems = lists
    .filter((item) => item.isCompleted === true)
    .map((item) => <ListItem key={item.id} item={item} />);

  const listItems = !completedItems ? inCompleteItems : completeItems;

  const toggleDisplay = completedItems
    ? "Show pending items"
    : "Show completed items";

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      <ul>{listItems}</ul>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      {/* <button onClick={toggleCompletedItems}>show completed</button> */}
      <p onClick={toggleCompletedItems}>{toggleDisplay}</p>
      <Modal modalState={modalState} />
    </section>
  );
}
