// npm
import { useContext } from "react";
// components
import { TaskContext } from "../contexts/TaskContext";

export default function WelcomeScreen() {
  const { toggleModal } = useContext(TaskContext);

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
        <button onClick={toggleModal}>Add task</button>
      </div>
    </section>
  );
}
