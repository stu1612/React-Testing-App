// npm
import { useState } from "react";
// components
import ListItem from "../components/ListItem";
import Sorter from "../components/Sorter";

export default function ShoppingScreen({ listState, modalState }) {
  const [isCompleteStatus, setIsCompleteStatus] = useState(false);
  const [lists, setLists] = listState;
  const [setIsModal] = modalState;

  function toggleStatus() {
    setIsCompleteStatus(!isCompleteStatus);
  }

  const toggleDisplay = isCompleteStatus
    ? "Show pending items"
    : "Show completed items";

  const itemList = lists
    .filter((item) => item.isCompleted === isCompleteStatus)
    .map((item) => (
      <ListItem key={item.id} item={item} listState={listState} />
    ));

  return (
    <section id="shopping-screen">
      <h2>Stuart</h2>
      <Sorter lists={lists} setLists={setLists} />
      <ul>{itemList}</ul>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <p onClick={toggleStatus}>{toggleDisplay}</p>
    </section>
  );
}
