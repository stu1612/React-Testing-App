// components
import Portal from "../components/Portal";

export default function ShoppingScreen({ modalState, listState }) {
  const [isModal, setIsModal] = modalState;
  const [lists, setLists] = listState;

  const listItems = lists.map((item) => (
    <li key={item.id}>
      {item.name} {item.price}
    </li>
  ));

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      <ul>{listItems}</ul>
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <Portal modalState={modalState} listState={listState} />
    </section>
  );
}
