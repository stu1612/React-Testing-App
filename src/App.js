//npm
import { useState, useEffect } from "react";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
// components
import Modal from "./components/Modal";
// styles
import "./styles/styles.css";

export default function App() {
  const storageKey = "localStorage";
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

  // Safeguard ()
  const showModal = isModal ? (
    <Modal modalState={[isModal, setIsModal]} listState={[lists, setLists]} />
  ) : null;

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
      {showModal}
    </div>
  );
}
