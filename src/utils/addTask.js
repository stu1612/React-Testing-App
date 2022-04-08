export default function addTask(name, price, getter, setter) {
  const newTask = {
    id: Math.random() * 1000,
    name: name,
    price: price,
    isCompleted: false,
  };
  const data = setter([...getter].concat(newTask));
  return { data: data };
}
