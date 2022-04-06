// npm
// components
import Modal from "../components/Modal";

export default function WelcomeScreen({ listState, modalState }) {
  const [isModal, setIsModal] = modalState;

  const showModal = isModal && (
    <Modal modalState={modalState} listState={listState} />
  );

  return (
    <section id="welcome-screen">
      <div className="title">
        <h1>Shopping List</h1>
      </div>
      <div className="content">
        <p>
          Welcome to EIKA's shopping list. Here you will be able to create a
          todo list with for the furniture you want to buy
        </p>
        <p>
          To get started press the Add new item button and a popup will ask you
          the name and the price of the item you want to add.
        </p>
        <button onClick={() => setIsModal(true)}>Add task</button>
        {showModal}
      </div>
    </section>
  );
}
