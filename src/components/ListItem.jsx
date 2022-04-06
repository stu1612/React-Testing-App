import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function ListItem({ item }) {
  const { completeTask } = useContext(TaskContext);
  const { name, price, id, isCompleted } = item;

  function onCompleteHandler() {
    completeTask(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onCompleteHandler}
      />
      <span>
        {name} {price}
      </span>
    </li>
  );
}
