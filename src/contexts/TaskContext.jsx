import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const storageKey = "localStorage";
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

  function addTask(name, price) {
    const newTask = {
      id: Math.random() * 1000,
      name: name,
      price: price,
      isCompleted: false,
    };
    return setLists([...lists].concat(newTask));
  }

  function completeTask(id) {
    setLists(
      lists.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  }

  return (
    <TaskContext.Provider value={{ lists, setLists, addTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
}
