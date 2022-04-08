export default function sortByName(getter, setter) {
  const clonedList = [...getter];
  clonedList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const data = setter(clonedList);
  return { data: data };
}
