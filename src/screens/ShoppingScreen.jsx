// components
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";

export default function ShoppingScreen({ modalState, listState }) {
  const [isModal, setIsModal] = modalState;
  const [lists, setLists] = listState;

  const listItems = lists.map((item) => <ListItem key={item.id} item={item} />);

  return (
    <section id="shopping-screen">
      <h2>Shopping Screen</h2>
      {listItems}
      <button onClick={() => setIsModal(true)}>Add Task</button>
      <Modal modalState={modalState} listState={listState} />
    </section>
  );
}
