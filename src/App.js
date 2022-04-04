//npm
import { useState } from "react";
import ShoppingScreen from "./screens/ShoppingScreen";
import TaskItems from "./screens/ShoppingScreen";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";

// styles
import "./styles/styles.css";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  const [lists, setLists] = useState([
    {
      id: Math.random() * 1000,
      name: "Chair",
      price: 300,
    },
    {
      id: Math.random() * 1000,
      name: "Table",
      price: 750,
    },
  ]);

  return (
    <div className="App">
      {/* <WelcomeScreen isModal={isModal} setIsModal={setIsModal}/> */}
      <ShoppingScreen
        lists={lists}
        setLists={setLists}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </div>
  );
}
