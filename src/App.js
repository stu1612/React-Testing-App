//npm
import { useState, useEffect } from "react";
import ShoppingScreen from "./screens/ShoppingScreen";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";

// styles
import "./styles/styles.css";

export default function App() {
  const storageKey = "shopping-list";
  const [isModal, setIsModal] = useState(false);
  const [lists, setLists] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(lists));
  }, [lists]);
  // {
  //   id: Math.random() * 1000,
  //   name: "Chair",
  //   price: 300,
  // },
  // {
  //   id: Math.random() * 1000,
  //   name: "Table",
  //   price: 750,
  // },
  // ]);

  return (
    <div>
      {lists.length === 0 && (
        <WelcomeScreen
          modalState={[isModal, setIsModal]}
          listState={[lists, setLists]}
        />
      )}
      {lists.length > 0 && (
        <ShoppingScreen
          modalState={[isModal, setIsModal]}
          listState={[lists, setLists]}
        />
      )}
    </div>
  );
}
