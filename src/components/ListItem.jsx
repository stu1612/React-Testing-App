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
