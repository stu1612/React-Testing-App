//npm
import { useContext } from "react";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
// components
import Modal from "./components/Modal";
import { TaskContext } from "./contexts/TaskContext";
// styles
import "./styles/styles.css";

export default function App() {
  const { lists, isModal } = useContext(TaskContext);

  const showModal = isModal ? <Modal /> : null;

  return (
    <div>
      {lists.length === 0 && <WelcomeScreen />}
      {lists.length > 0 && <ShoppingScreen />}
      {showModal}
    </div>
  );
}
