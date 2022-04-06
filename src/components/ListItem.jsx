export default function ListItem({ item }) {
  const { name, price } = item;
  return (
    <div>
      <input type="checkbox" name="" id="" />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}
