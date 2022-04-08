// utils
import sortByName from "../utils/sortByName";
import sortByPrice from "../utils/sortByPrice";

export default function Sorter({ listState }) {
  const [lists, setLists] = listState;
  return (
    <section id="sorter">
      <span className="light">Sort by:</span>
      <button className="pills" onClick={() => sortByName(lists, setLists)}>
        Name
      </button>
      <button className="pills" onClick={() => sortByPrice(lists, setLists)}>
        Price
      </button>
    </section>
  );
}
