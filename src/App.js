//npm
import { useState } from "react";
import { TaskContextProvider } from "./contexts/TaskContext";
import ShoppingScreen from "./screens/ShoppingScreen";
// screens
import WelcomeScreen from "./screens/WelcomeScreen";

// styles
import "./styles/styles.css";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <TaskContextProvider>
      {/* <WelcomeScreen isModal={isModal} setIsModal={setIsModal}/> */}
      <ShoppingScreen isModal={isModal} setIsModal={setIsModal} />
    </TaskContextProvider>
  );
}
