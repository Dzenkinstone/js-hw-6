const listRef = document.querySelector("ul");
console.log(listRef);

const item = listRef.children;
const itemRef = [...item];

itemRef.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
