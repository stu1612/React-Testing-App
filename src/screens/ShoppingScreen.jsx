// npm
import { useState } from "react";
// components
import ListItem from "../components/ListItem";
import Sorter from "../components/Sorter";

export default function ShoppingScreen({ listState, modalState }) {
  const [isCompleteStatus, setIsCompleteStatus] = useState(false);
  const [lists, setLists] = listState;
  const [isModal, setIsModal] = modalState;

  function toggleStatus() {
    setIsCompleteStatus(!isCompleteStatus);
  }

  const toggleDisplay = isCompleteStatus
    ? "Show pending items"
    : "Show completed items";

  // UI Test #6 - if lists array is TRUE then display items based on item.isCompleted boolean value
  const itemsList =
    lists &&
    lists
      .filter((item) => item.isCompleted === isCompleteStatus)
      .map((item) => (
        <ListItem key={item.id} item={item} listState={listState} />
      ));

  // Safeguard
  const noItemsInList = itemsList.length === 0 && "no shopping items found";

  return (
    <section id="shopping-screen">
      <h2>This is your shopping list</h2>
      <Sorter lists={lists} setLists={setLists} />
      <ul>{itemsList}</ul>
      <p>{noItemsInList}</p>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <p onClick={toggleStatus}>{toggleDisplay}</p>
    </section>
  );
}
