// components
import Modal from "../components/Modal";

export default function ShoppingScreen({ lists, isModal, setIsModal }) {
  const showListItems = lists.map((item) => (
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
