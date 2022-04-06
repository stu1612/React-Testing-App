//npm
import { useState } from "react";
import ShoppingScreen from "./screens/ShoppingScreen";
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
    <div>
      {/* <WelcomeScreen /> */}
      <ShoppingScreen
        modalState={[isModal, setIsModal]}
        listState={[lists, setLists]}
      />
    </div>
  );
}
