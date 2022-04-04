import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [items, setItems] = useState([
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
    <TaskContext.Provider value={{ items, setItems }}>
      {children}
    </TaskContext.Provider>
  );
}
