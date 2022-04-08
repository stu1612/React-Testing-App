//npm
import { BsImage } from "react-icons/bs";

export default function ListItem({ item, listState }) {
  const [lists, setLists] = listState;
  const { name, price, id, isCompleted } = item;

  function onCompleteHandler() {
    completeTask(id);
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
    <li className="list-item">
      <div className="list-content">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onCompleteHandler}
          className="checkbox"
        />
        <span>{name}</span>
        <span>{price + " sek"}</span>
      </div>
      <BsImage size={28} />
    </li>
  );
}
