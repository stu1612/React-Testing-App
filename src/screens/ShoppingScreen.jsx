// npm
import { useState } from "react";
// components
import ListItem from "../components/ListItem";
import Sorter from "../components/Sorter";
// images
import logo from "../assets/images/eika_logo.png";

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
  const noItemsInList = itemsList.length === 0 && (
    <p>No shopping items found</p>
  );

  return (
    <section className="container-768" id="shopping-screen">
      <img src={logo} alt="eika branding logo" className="logo" />
      <div className="container-content">
        <h1>This is your shopping list</h1>
        <Sorter lists={lists} setLists={setLists} />
        <ul className="container-lists">
          {itemsList} {noItemsInList}
        </ul>
        <button className="btn btn-primary" onClick={() => setIsModal(true)}>
          Add Task
        </button>
        <p className="light cursor" onClick={toggleStatus}>
          {toggleDisplay}
        </p>
      </div>
    </section>
  );
}
