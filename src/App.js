//npm
import { useState, useContext } from "react";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
// context
import { TaskContext } from "./contexts/TaskContext";
// styles
import "./styles/styles.css";

export default function App() {
  const { lists } = useContext(TaskContext);
  const [isModal, setIsModal] = useState(false);

  return (
    <div>
      {lists.length === 0 && (
        <WelcomeScreen modalState={[isModal, setIsModal]} />
      )}
      {lists.length > 0 && (
        <ShoppingScreen modalState={[isModal, setIsModal]} />
      )}
    </div>
  );
}
