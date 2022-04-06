// utils
import sortByName from "../utils/sortByName";
import sortByPrice from "../utils/sortByPrice";

export default function Sorter({ lists, setLists }) {
  return (
    <section>
      Sort by:
      <button onClick={() => sortByName(lists, setLists)}>Name</button>
      <button onClick={() => sortByPrice(lists, setLists)}>Price</button>
    </section>
  );
}
