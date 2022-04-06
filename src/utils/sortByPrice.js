export default function sortByPrice(getter, setter) {
  const clonedList = [...getter];
  clonedList.sort((a, b) => {
    return a.price - b.price;
  });
  setter(clonedList);
}
