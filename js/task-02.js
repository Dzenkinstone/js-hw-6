const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.append(ingredient);
  listRef.append(itemRef);
  return itemRef;
});

console.log(listRef);
