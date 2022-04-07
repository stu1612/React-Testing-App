// npm
import { useContext, useState } from "react";
// components
import ListItem from "../components/ListItem";
import Sorter from "../components/Sorter";
import { TaskContext } from "../contexts/TaskContext";

export default function ShoppingScreen() {
  const { lists, setLists, toggleModal } = useContext(TaskContext);
  const [isCompleteStatus, setIsCompleteStatus] = useState(false);

  function toggleStatus() {
    setIsCompleteStatus(!isCompleteStatus);
  }

  const toggleDisplay = isCompleteStatus
    ? "Show pending items"
    : "Show completed items";

  const itemList = lists
    .filter((item) => item.isCompleted === isCompleteStatus)
    .map((item) => <ListItem key={item.id} item={item} />);

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      <Sorter lists={lists} setLists={setLists} />
      <ul>{itemList}</ul>
      <button onClick={toggleModal}>Add Task</button>
      <p onClick={toggleStatus}>{toggleDisplay}</p>
    </section>
  );
}
